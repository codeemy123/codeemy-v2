import React from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Route ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
          <p className="text-gray-400 max-w-md mb-8">
            We couldn't load this section of the page. This is usually due to a network interruption or corrupted session.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-purple-600/20"
          >
            <RefreshCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
