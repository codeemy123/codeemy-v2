import { useState } from "react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "../../firebase";
import { db } from "../../firebase"



async function createUserIfNotExists(user) {
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName || "",
      email: user.email,
      phone: user.phoneNumber || "",
      enrolledCourses: [], // empty initially
      photoURL: user.photoURL || ""
    });
  }
}

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (formData.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          navigate("/dashboard");
        } else {
          // stay on the current page if not verified
        }
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        const user = userCredential.user;
        await updateProfile(user, {
          displayName: formData.name,
        });
        await sendEmailVerification(user);
        await createUserIfNotExists(user);
        localStorage.setItem('idToken', user.accessToken);
        navigate("/verifyemail");
      } catch (error) {
        console.log("Registration Error:", error.message);
        if (error.code === "auth/email-already-in-use") {
          setErrors({ custom_error: "Email already registered" });
        } else if (error.code === "auth/weak-password") {
          setErrors({ custom_error: "Password too weak" });
        } else {
          setErrors({ custom_error: "Something went wrong. Please try again." });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await createUserIfNotExists(user);
      localStorage.setItem('idToken', user.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setErrors({ custom_error: "Google sign-in failed. Please try again." });
    }
  };


  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-[#f5f0fc] px-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md border border-gray-200 bg-white">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-14 w-14 rounded-full" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-gray-900"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-gray-900"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-gray-900"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* ⬇️ Error Below Inputs, Above Button */}
          {errors.custom_error && (
            <p className="text-red-500 text-sm text-center">{errors.custom_error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition ${loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-md transition"
        >
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            className="text-purple-600 font-medium hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
