import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import "../../firebase"; // Ensure Firebase is initialized

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email address";
    }
    if (!formData.password) {
      errs.password = "Password is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "", custom_error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      if (!user.emailVerified) {
        setErrors({
          custom_error: "Please verify your email before logging in.",
        });
        setLoading(false);
        return;
      }

      localStorage.setItem('idToken', user.accessToken);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setErrors({ custom_error: "No user found with this email." });
      } else if (error.code === "auth/wrong-password") {
        setErrors({ custom_error: "Incorrect password." });
      } else {
        setErrors({ custom_error: "Login failed. Please try again." });
      }
      setLoading(false);
    }
  };

  // const handleGoogleLogin = () => {
  //   console.log("Google login clicked");
  //   // Google login logic (optional)
  // };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.emailVerified) {
        // Gmail accounts are considered verified by default, but you can still check
        console.log("Google account signed in:", user.email);
      }

      // Store token if you need
      localStorage.setItem('idToken', user.accessToken);

      // Redirect to dashboard
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
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-gray-900"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-gray-900"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Custom error */}
          {errors.custom_error && (
            <p className="text-red-500 text-sm text-center">
              {errors.custom_error}
            </p>
          )}

          {/* Forgot password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 ${loading ? "bg-purple-400" : "bg-purple-500 hover:bg-purple-600"
              } text-white font-semibold py-2 rounded-lg transition`}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-md transition"
        >
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Login with Google</span>
        </button>

        {/* Sign up link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-purple-600 font-medium hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
