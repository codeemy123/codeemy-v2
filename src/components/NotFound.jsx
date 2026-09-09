// import Link from "react"
import { Frown } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-4 text-center">
      <Frown className="w-24 h-24 text-gray-500 mb-6 animate-bounce-slow" />
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <a
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        Go to Homepage
      </a>
    </div>
  )
}
