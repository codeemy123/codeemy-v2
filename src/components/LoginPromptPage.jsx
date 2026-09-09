import { useEffect, useState } from "react";
import { FaWhatsapp, FaGift } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getAuth , onAuthStateChanged } from "firebase/auth";


const LoginPromptPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);


  useEffect(() => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return () => unsubscribe();
}, []);


  const handleLogin = () => {
    // replace with real login logic
    setIsLoggedIn(true);
    setShowPopup(false);
    navigate("/login")
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Background content */}
    

  


      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-sm p-6 rounded-2xl shadow-2xl text-center relative">
            {/* Header */}
            <div className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
 
              <FaGift className="text-white text-lg" />
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={20} />
            </button>

            {/* WhatsApp Icon */}
            <div className="mt-8 mb-3">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Invest in your Future with CodeEmy!
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              Connect with us and unlock access to personalized learning, live mentorship,
              certifications, and career-boosting content!
            </p>

            {/* Features */}
            <div className="bg-gray-100 p-4 rounded-lg text-sm text-left space-y-2 mb-5">
              <div className="flex items-start space-x-2">
                <span className="text-purple-500 text-lg">•</span>
                <p className="text-black">Access to 1000+ curated courses</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-500 text-lg">•</span>
                <p className="text-black" >Free consultation & learning plans</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-500 text-lg">•</span>
                <p className="text-black" >Portfolio building with mentorship</p>
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Login / Connect Now
            </button>

            <p className="mt-3 text-xs text-gray-500">
              Just say "Hi" and we'll guide you through 🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPromptPage;

