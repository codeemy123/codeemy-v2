import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./firebase"; // Ensure Firebase initializes before Navbar mounts
import Footer from "./components/HeadandFooter/Footer";
import Navbar from "./components/HeadandFooter/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import { ErrorBoundary } from "./components/Loaders/ErrorBoundary";
import { GenericPageSkeleton, CoursesPageSkeleton } from "./components/Loaders/Skeletons";

// Helper for Named Exports (since React.lazy expects a default export)
const lazyNamed = (resolver, name) => lazy(() => resolver().then(module => ({ default: module[name] })));

// Lazy Loads
const Home = lazy(() => import("./components/Home/Home"));
const LoginPromptPage = lazy(() => import("./components/LoginPromptPage"));
const SignUp = lazy(() => import("./components/auth/Signup"));
const Login = lazy(() => import("./components/auth/Login"));
const VerifyEmailPage = lazy(() => import("./components/auth/Verifyemail"));
const CertificatePage = lazy(() => import("./components/CertificatePage"));
const NotFound = lazy(() => import("./components/NotFound"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const CertificateVerification = lazy(() => import("./components/CertVerificationPage"));
const CookiePolicy = lazy(() => import("./components/Privacy/CookiePolicy"));
const Disclaimer = lazy(() => import("./components/Privacy/Disclaimer"));
const PrivacyPolicy = lazy(() => import("./components/Privacy/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/Privacy/TermsOfService"));
const RefundPage = lazy(() => import("./components/Privacy/RefundPage"));

// Lazy Loads (Named Exports)
const AboutUsPage = lazyNamed(() => import("./components/About/AboutUsPage"), "AboutUsPage");
const CourseDetailPage = lazyNamed(() => import("./components/CourseDetailsPage"), "CourseDetailPage");
const CoursesPage = lazyNamed(() => import("./components/CoursesPage"), "CoursesPage");
const ProfilePage = lazyNamed(() => import("./components/ProfilePage"), "ProfilePage");
const PaymentPage = lazyNamed(() => import("./components/PaymentPage"), "PaymentPage");

// Generic Route Wrapper with strict isolation & fallback
const AppRoute = ({ children, fallback: Fallback = GenericPageSkeleton }) => (
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default function App() {
  return (
    <Router>
      {/* Persistent global layout layers */}
      <Navbar />
      <WhatsAppButton />

      {/* Progressive Route Rendering */}
      <Routes>
        <Route path="/" element={<AppRoute><Home /><LoginPromptPage /></AppRoute>} />
        <Route path="/verify/:certId" element={<AppRoute><CertificatePage /></AppRoute>} />
        <Route path="/about" element={<AppRoute><AboutUsPage /></AppRoute>} />
        
        {/* Profile variants */}
        <Route path="/profile" element={<AppRoute><ProfilePage /></AppRoute>} />
        <Route path="/dashboard" element={<AppRoute><ProfilePage /></AppRoute>} />
        
        {/* Auth */}
        <Route path="/signup" element={<AppRoute><SignUp /></AppRoute>} />
        <Route path="/login" element={<AppRoute><Login /></AppRoute>} />
        <Route path="/verifyemail" element={<AppRoute><VerifyEmailPage /></AppRoute>} />
        
        {/* Core feature heavy pages (Custom Skeletons) */}
        <Route path="/courses" element={<AppRoute fallback={CoursesPageSkeleton}><CoursesPage /></AppRoute>} />
        <Route path="/course/:id" element={<AppRoute><CourseDetailPage /></AppRoute>} />
        <Route path="/payment/:courseId" element={<AppRoute><PaymentPage /></AppRoute>} />
        
        {/* Legal & Static */}
        <Route path="/certificate" element={<AppRoute><CertificateVerification /></AppRoute>} />
        <Route path="/contact" element={<AppRoute><ContactPage /></AppRoute>} />
        <Route path="/privacy-policy" element={<AppRoute><PrivacyPolicy /></AppRoute>} />
        <Route path="/terms-of-service" element={<AppRoute><TermsOfService /></AppRoute>} />
        <Route path="/refund-policy" element={<AppRoute><RefundPage /></AppRoute>} />
        <Route path="/cookie-policy" element={<AppRoute><CookiePolicy /></AppRoute>} />
        <Route path="/disclaimer" element={<AppRoute><Disclaimer /></AppRoute>} />
        
        {/* Fallback */}
        <Route path="/*" element={<AppRoute><NotFound /></AppRoute>} />
      </Routes>

      {/* Persistent footer */}
      <Footer />
    </Router>
  );
}

