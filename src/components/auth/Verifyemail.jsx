import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "../../firebase";

export default function VerifyEmailPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const interval = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await user.reload(); // 🔄 Reload user data from Firebase
        if (user.emailVerified) {
          clearInterval(interval); // ✅ Stop checking
          navigate("/dashboard"); // ✅ Redirect
        }
      }
    }, 3000); // check every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9]">
      <div className="p-8 bg-white shadow-md rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Verify Your Email</h2>
        <p className="text-gray-600 mb-4">
          We've sent a verification link to your email. Please check your inbox (and spam folder).
        </p>
        <p className="text-sm text-gray-500">
          This page will automatically redirect once your email is verified.
        </p>
      </div>
    </div>
  );
}
