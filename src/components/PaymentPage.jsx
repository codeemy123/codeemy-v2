"use client";

import { useState, useEffect } from "react";
import {
  CreditCard,
  Shield,
  CheckCircle,
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  BookOpen,
  Award,
  Loader,
  Lock,
  Zap
} from "lucide-react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

import { courses } from "../data/CourseData";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
const provider = new GoogleAuthProvider(); // Or any auth method you prefer

const WORKER_URL = "https://payment-backend.info-codeemy.workers.dev";

export function PaymentPage() {
  const param = useParams();
  const { courseId } = param;
  // Safely find the course regardless of string/number type mismatch
  const course = courses.find((c) => String(c.id) === String(courseId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [razorpayReady, setRazorpayReady] = useState(false);

  const navigate = useNavigate();

  // Safety fallback if a user forces an invalid URL
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 max-w-md mx-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Course Not Found</h2>
          <p className="text-slate-500 mb-8 font-medium">The course you are trying to purchase could not be found or has been removed from our catalog.</p>
          <button onClick={() => navigate('/')} className="px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-semibold transition-colors shadow-sm w-full">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Puducherry",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    if (course.category === "Medical") return;

    // If Razorpay is already loaded (e.g. hot reload / cached), mark ready immediately
    if (window.Razorpay) {
      setRazorpayReady(true);
      return;
    }

    // Load Razorpay script dynamically and wait for it to fully load
    const existing = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => setRazorpayReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayReady(true);
    script.onerror = () => console.error("Failed to load Razorpay SDK");
    document.body.appendChild(script);

    return () => {
      // Don't remove — other pages may need it and re-appending causes race conditions
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };


  if (course.category === "Medical") return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-slate-300 mb-6">Contact our team for enrollment details.</p>
        <button onClick={() => navigate(`/course/${course.id}#medical-enquiry`)} className="rounded-xl bg-purple-600 px-6 py-3 font-semibold">View Program &amp; Enquire</button>
      </div>
    </div>
  );

  const price = Number(course.price.replace(/[^\d]/g, ""));

  const handlePayment = async () => {
    // Guard: Razorpay SDK not loaded yet (slow networks, ad-blockers, etc.)
    if (!razorpayReady || !window.Razorpay) {
      alert("Payment gateway is still loading. Please wait a moment and try again.");
      return;
    }

    if (!auth.currentUser) {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Logged in user:", result.user);
        alert(`Welcome ${result.user.displayName}, now complete the payment.`);
      } catch (error) {
        console.error("Login failed:", error);
        return;
      }
    }

    if (!validateForm()) return;
    setIsLoading(true);

    try {
      // ✅ FIX: amount must be in PAISE (multiply by 100), not the display string
      const amountInPaise = price * 100;

      const res = await fetch(`${WORKER_URL}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Order creation failed: ${res.status}`);
      }

      const order = await res.json();

      const options = {
        key: "rzp_test_RDtOyD7zvwb9a8",
        // ✅ FIX: amount in paise — Razorpay expects paise, not rupees
        amount: amountInPaise,
        currency: "INR",
        name: "CodeEmy",
        description: course.title,
        order_id: order.id,

        handler: async (response) => {
          try {
            const verifyRes = await fetch(`${WORKER_URL}/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const data = await verifyRes.json();
            if (data.success) {
              // Save enrollment to Firestore
              await addDoc(collection(db, "enrollments"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                state: formData.state,
                courseId: course.id,
                courseTitle: course.title,
                price: price,
                razorpayPaymentId: response.razorpay_payment_id,
                timestamp: serverTimestamp(),
              });

              const currentUser = auth.currentUser;
              if (currentUser) {
                const userRef = doc(db, "users", currentUser.uid);
                const snap = await getDoc(userRef);
                if (!snap.exists()) {
                  await setDoc(userRef, {
                    name: currentUser.displayName || formData.name,
                    email: currentUser.email || formData.email,
                    phone: currentUser.phoneNumber || formData.phone,
                    photoURL: currentUser.photoURL || "",
                    enrolledCourses: [course.id],
                  });
                } else {
                  await updateDoc(userRef, {
                    enrolledCourses: arrayUnion(course.id),
                  });
                }
              }

              alert("Payment successful! Welcome to the course.");
              navigate("/profile");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Post-payment error:", err);
            alert("Payment succeeded but enrollment saving failed. Contact support with your payment ID: " + response.razorpay_payment_id);
          } finally {
            setIsLoading(false);
          }
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#4f46e5" },
        modal: {
          // ✅ FIX: Reset loading state if user closes the Razorpay modal
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
      });

      rzp.open();
      // ✅ FIX: Don't setIsLoading(false) here — let handler/ondismiss do it
      // The finally block below would incorrectly reset loading before the popup completes
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-indigo-100 selection:text-indigo-900 border-t border-slate-100">
      
      {/* LEFT COLUMN: Payment Form (Order 2 on Mobile, Order 1 on Desktop) */}
      <div className="flex-1 flex flex-col relative pt-28 md:pt-32 pb-24 px-6 md:px-12 lg:px-16 xl:px-32 z-10 lg:order-1 order-2">
        <div className="max-w-[500px] w-full mx-auto xl:mr-auto xl:ml-0">
          <button
            onClick={() => navigate(`/course/${courseId}`)}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-10 transition-colors group text-[12px] font-bold tracking-widest uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Course
          </button>

          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-slate-900 mb-3 tracking-tight leading-none">
              Complete Payment
            </h1>
            <p className="text-[14px] text-slate-500 mb-12 flex items-center gap-2 font-medium">
              <Lock className="w-[14px] h-[14px] text-emerald-500" /> Secure encrypted checkout powered by Razorpay
            </p>

            <form className="space-y-8">
              {/* Contact Info Block */}
              <div className="space-y-4">
                <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-widest mb-2">Contact Information</h3>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className={`w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-xl text-[15px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all ${
                      errors.email ? "border-red-300 ring-1 ring-red-100" : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[12px] mt-1.5 ml-1 font-medium">{errors.email}</p>}
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile number"
                    maxLength="10"
                    className={`w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-xl text-[15px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all ${
                      errors.phone ? "border-red-300 ring-1 ring-red-100" : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[12px] mt-1.5 ml-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              {/* Billing Info Block */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                 <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-widest mb-2">Billing Details</h3>

                 <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name on card"
                    className={`w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-xl text-[15px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all ${
                      errors.name ? "border-red-300 ring-1 ring-red-100" : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[12px] mt-1.5 ml-1 font-medium">{errors.name}</p>}
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border rounded-xl text-[15px] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white appearance-none ${
                        !formData.state ? "text-slate-400" : "text-slate-900" 
                    } ${
                      errors.state ? "border-red-300 ring-1 ring-red-100" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <option value="" disabled>Select your state</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state} className="text-slate-900 font-medium">
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-[12px] mt-1.5 ml-1 font-medium">{errors.state}</p>}
                </div>
              </div>

              {/* Payment Action */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={isLoading || !razorpayReady}
                  className={`w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-[16px] hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.25)] hover:-translate-y-1 ${
                    isLoading || !razorpayReady ? "opacity-75 cursor-wait" : ""
                  }`}
                >
                  {!razorpayReady ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin text-white/70" />
                      Loading payment gateway...
                    </>
                  ) : isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin text-white/70" />
                      Connecting to gateway...
                    </>
                  ) : (
                    <>Continue to secure payment</>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-[12px] font-medium text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Includes 30-Day Money Back Guarantee
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Order Summary Receipt (Order 1 on Mobile, Order 2 on Desktop) */}
      <div className="w-full lg:w-[45%] xl:w-[42%] 2xl:w-[40%] bg-[#F8FAFC] lg:border-l border-slate-200 pt-28 md:pt-32 pb-12 lg:pb-24 px-6 md:px-12 lg:px-12 xl:px-20 lg:order-2 order-1 relative z-0">
         <div className="max-w-[500px] w-full mx-auto lg:ml-auto lg:mr-0 sticky top-28 lg:top-36">
            <h3 className="hidden lg:block text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-8">Order Summary</h3>
            
            {/* The absolute unit of a receipt card */}
            <div className={`bg-white rounded-[2rem] p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-1000 ease-out delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
               {/* Course Image Header bleed */}
               <div className="aspect-video relative rounded-[1.5rem] overflow-hidden mb-5 bg-slate-100">
                 <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                 
                 <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-2">
                    <span className="text-[10px] font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md uppercase tracking-widest border border-white/10 shadow-sm">
                      {course.category}
                    </span>
                    <h4 className="text-white font-extrabold text-[22px] leading-snug line-clamp-2 shadow-sm">
                      {course.title}
                    </h4>
                 </div>
               </div>

               {/* Receipt Body */}
               <div className="px-3 pb-3">
                 <div className="space-y-4 pt-2 pb-6 border-b border-dashed border-slate-200">
                   {/* Meta Items */}
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 font-medium tracking-wide">Instructor</span>
                      <span className="text-slate-900 font-bold flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500 fill-amber-500"/> CodeEmy</span>
                   </div>
                 </div>

                 <p className="pt-6 pb-2 px-1 text-slate-500 text-xs font-medium">Includes lifelong access &amp; updates</p>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}
