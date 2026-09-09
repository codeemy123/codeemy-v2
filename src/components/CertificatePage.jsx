"use client"

import { useEffect, useState, useRef } from "react"
import {
  CheckCircle2, XCircle, Download, Share2, ExternalLink,
  Shield, ShieldCheck, Fingerprint, Lock, ScanLine,
  Calendar, BookOpen, Hash, User, Building2, Award,
  Linkedin, Copy, Check,
} from "lucide-react"
import QRCode from "react-qr-code"
import { useParams, useNavigate } from "react-router-dom"
import { db } from "../firebase"
import { doc, getDoc } from "firebase/firestore"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"
import NIP from "../assets/NIP.png"
import MSME from "../assets/MSME.png"
import AICTE from "../assets/AICTE.png"
import ISO from "../assets/ISO.png"
import certificate_logo from "../assets/certificate_logo.png"

/* ── Verification steps shown during loading ── */
const VERIFY_STEPS = [
  { icon: ScanLine, text: "Scanning certificate database...", delay: 0 },
  { icon: Fingerprint, text: "Validating certificate records...", delay: 800 },
  { icon: ShieldCheck, text: "Verifying authenticity...", delay: 1800 },
]

/* ── Trust indicators ── */
const TRUST_ITEMS = [
  { icon: Shield, label: "Tamper-proof" },
  { icon: Lock, label: "Encrypted" },
  { icon: ShieldCheck, label: "Official Validation" },
]

export default function CertificatePage() {
  const { certId } = useParams()
  const navigate = useNavigate()
  const [cert, setCert] = useState(null)
  const [status, setStatus] = useState("verifying") // verifying → verified | not_found
  const [currentStep, setCurrentStep] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const [copied, setCopied] = useState(false)
  
  /* ── Dynamic Scaling ── */
  const wrapperRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (status !== "verified") return

    const updateScale = () => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth
        setScale(Math.min(width / 1200, 1))
      }
    }
    
    // Initial scale computation
    updateScale()
    
    // Listen for resize
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [status])

  /* ── Fetch certificate with staged verification animation ── */
  useEffect(() => {
    let stepTimer1, stepTimer2, resultTimer

    async function fetchCertificate() {
      setCurrentStep(0)
      stepTimer1 = setTimeout(() => setCurrentStep(1), 800)
      stepTimer2 = setTimeout(() => setCurrentStep(2), 1800)

      try {
        const certRef = doc(db, "certificates", certId)
        const certSnap = await getDoc(certRef)

        resultTimer = setTimeout(() => {
          if (certSnap.exists()) {
            setCert(certSnap.data())
            setStatus("verified")
          } else {
            setStatus("not_found")
          }
        }, 2800)
      } catch {
        resultTimer = setTimeout(() => setStatus("not_found"), 2800)
      }
    }

    fetchCertificate()
    return () => {
      clearTimeout(stepTimer1)
      clearTimeout(stepTimer2)
      clearTimeout(resultTimer)
    }
  }, [certId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  /* ── Download as PDF ── */
  const downloadCertificate = async () => {
    setIsDownloading(true)
    try {
      const el = document.getElementById("certificate-content")
      if (!el) return

      // Temporarily remove CSS transform so html2canvas captures at full size
      const originalTransform = el.style.transform
      el.style.transform = "none"

      const canvas = await html2canvas(el, {
        scale: 2, useCORS: true, allowTaint: true, backgroundColor: "#ffffff",
        width: 1200, height: 720,
      })

      // Restore transform
      el.style.transform = originalTransform

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" })
      const imgWidth = 297
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save(`certificate-${cert?.certificateId || "download"}.pdf`)
    } catch (e) {
      console.error("Error generating PDF:", e)
    } finally {
      setIsDownloading(false)
    }
  }

  /* ── Copy link ── */
  const certUrl = `https://codeemy.in/verify/${certId}`
  const handleCopy = () => {
    navigator.clipboard.writeText(certUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  /* ── Share on LinkedIn ── */
  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certUrl)}`
    window.open(url, "_blank")
  }

  /* ===================================== */
  /*  VERIFYING STATE                      */
  /* ===================================== */
  if (status === "verifying") {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          {/* Verification card */}
          <div className="rounded-2xl p-8 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}>

            {/* Animated shield */}
            <div className="relative w-20 h-20 mx-auto mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(99,102,241,0.15)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-10 h-10 text-indigo-400" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">Verifying Certificate</h2>
            <p className="text-slate-400 text-sm mb-1 font-mono">{certId}</p>
            <div className="w-12 h-0.5 bg-indigo-500/30 mx-auto mb-8 rounded-full" />

            {/* Steps */}
            <div className="space-y-3 text-left">
              {VERIFY_STEPS.map((step, i) => {
                const StepIcon = step.icon
                const isActive = i === currentStep
                const isDone = i < currentStep
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: step.delay / 1000 }}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: isActive ? "rgba(99,102,241,0.1)" : "transparent",
                      border: `1px solid ${isActive ? "rgba(99,102,241,0.2)" : "transparent"}`,
                    }}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDone ? "bg-emerald-500/20" : isActive ? "bg-indigo-500/20" : "bg-slate-800"
                    }`}>
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}>
                          <StepIcon className="w-4 h-4 text-indigo-400" />
                        </motion.div>
                      ) : (
                        <StepIcon className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      isDone ? "text-emerald-400" : isActive ? "text-white" : "text-slate-600"
                    }`}>
                      {step.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ===================================== */
  /*  NOT FOUND STATE                      */
  /* ===================================== */
  if (status === "not_found") {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>

        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          <div className="rounded-2xl p-8 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(239,68,68,0.2)",
              backdropFilter: "blur(20px)",
            }}>

            {/* Error icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ background: "rgba(239,68,68,0.1)", border: "2px solid rgba(239,68,68,0.2)" }}
            >
              <XCircle className="w-10 h-10 text-red-400" />
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2">Verification Failed</h2>
            <p className="text-slate-400 text-sm mb-6">
              Certificate <span className="font-mono text-red-400/80">{certId}</span> was not found in our system or is invalid.
            </p>

            <div className="p-4 rounded-xl mb-6"
              style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.1)" }}>
              <p className="text-sm text-slate-300">
                <strong className="text-white">Suggestions:</strong>
              </p>
              <ul className="text-sm text-slate-400 mt-2 space-y-1 text-left pl-4 list-disc">
                <li>Double-check the certificate ID for typos</li>
                <li>Ensure the ID includes the correct prefix (e.g. CERT-)</li>
                <li>Contact support if you believe this is an error</li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/certificate")}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              }}
            >
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ===================================== */
  /*  VERIFIED STATE                       */
  /* ===================================== */
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 md:pt-28"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">

        {/* ── Verified Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl"
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.2)" }}
              >
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </motion.div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">Certificate Verified</h1>
                <p className="text-emerald-400/70 text-sm">This certificate is authentic and officially issued by Codeemy</p>
              </div>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-3">
              {TRUST_ITEMS.map((item) => {
                const TrustIcon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <TrustIcon className="w-3.5 h-3.5 text-emerald-400" />
                    {item.label}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Details + Actions Grid ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mb-8">

          {/* Left — Certificate Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Top accent */}
            <div className="h-1" style={{ background: "linear-gradient(90deg, #10b981, #6366f1, #10b981)" }} />

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Certificate Details</h3>
              </div>

              {/* Info grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: User, label: "Recipient", value: cert?.userName },
                  { icon: BookOpen, label: "Course", value: cert?.courseName },
                  { icon: Calendar, label: "Completed On", value: cert?.completionDate },
                  { icon: Hash, label: "Certificate ID", value: cert?.certificateId, mono: true },
                  { icon: Building2, label: "Issued By", value: "Codeemy Academy" },
                  { icon: ShieldCheck, label: "Status", value: "Verified ✓", highlight: true },
                ].map((item, i) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="p-4 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <ItemIcon className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">{item.label}</span>
                      </div>
                      <p className={`text-sm font-semibold ${
                        item.highlight ? "text-emerald-400" : "text-white"
                      } ${item.mono ? "font-mono text-xs" : ""}`}>
                        {item.value || "—"}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Public link */}
              <div className="p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)" }}>
                <ExternalLink className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-xs text-slate-400 truncate flex-1 font-mono">{certUrl}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.06)",
                    border: `1px solid ${copied ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.08)"}`,
                    color: copied ? "#10b981" : "#94a3b8",
                  }}
                >
                  {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right — QR + Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {/* QR Card */}
            <div className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
              <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">Scan to Verify</p>
              <div className="bg-white rounded-xl p-4 inline-block mx-auto mb-3">
                <QRCode
                  value={certUrl}
                  size={140}
                  bgColor="#ffffff"
                  fgColor="#0f172a"
                />
              </div>
              <p className="text-xs text-slate-500 font-mono">{cert?.certificateId}</p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2.5">
              <button
                onClick={downloadCertificate}
                disabled={isDownloading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }}
              >
                <Download className="w-4 h-4" />
                {isDownloading ? "Generating PDF..." : "Download Certificate"}
              </button>

              <button
                onClick={handleLinkedIn}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e2e8f0",
                }}
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                Share on LinkedIn
              </button>

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e2e8f0",
                }}
              >
                <Share2 className="w-4 h-4 text-slate-400" />
                Copy Verification Link
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Actual Certificate (for PDF download) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Certificate Preview</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="certificate-wrapper" ref={wrapperRef} style={{ height: `${720 * scale}px` }}>
            <div className="certificate-container" id="certificate-content" style={{ transform: `scale(${scale})` }}>
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full h-auto"
                style={{ aspectRatio: "5/3", width: "1200px", maxWidth: "none" }}>
                <div className="p-12 relative h-auto">
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border-4 border-double border-blue-200 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                      <img src={logo} alt="Watermark" className="w-[400px] opacity-10" style={{ objectFit: "contain" }} />
                    </div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-26 flex items-center justify-center">
                          <img src={logo} alt="Codeemy" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-blue-800">CodeEmy Academy</h2>
                          <p className="text-blue-600">Excellence in Education</p>
                        </div>
                      </div>
                      <div className="relative">
                        <img src={certificate_logo} alt="Certificate Logo" className="h-24 object-contain" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="text-center mb-8">
                      <h1 className="text-5xl font-serif text-gray-800 mb-4">Certificate of Completion</h1>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
                    </div>

                    {/* Content */}
                    <div className="text-center mb-8">
                      <p className="text-lg text-gray-600 mb-8">Proudly Certify to</p>
                      <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">{cert?.userName}</h2>
                        <div className="w-64 h-0.5 bg-gray-800 mx-auto" />
                      </div>
                      <div className="max-w-3xl mx-auto mb-2">
                        <p className="text-base text-gray-700 leading-relaxed">
                          This is to certify that the above Mentioned Candidate has successfully Completed his/her course in{" "}
                          <strong className="text-blue-800">{cert?.courseName}</strong> from{" "}
                          <strong className="text-blue-800">{cert?.completionDate}</strong>. During this course he/she
                          showed diligence, consistency, determination, active participation and innovation throughout their
                          learning period.
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="mb-2">
                          <div className="text-2xl font-script text-gray-800 mb-1">John Smith</div>
                          <div className="w-32 h-0.5 bg-gray-600 mx-auto mb-2" />
                          <p className="font-semibold text-gray-700">John Smith</p>
                          <p className="text-sm text-gray-600">Director</p>
                          <p className="text-sm text-gray-600">Anapty CodeEmy Technologies Pvt. Ltd</p>
                        </div>
                      </div>

                      <div className="mb-18 pb-10 w-full flex justify-center items-center gap-6">
                        {[ISO, AICTE, MSME, NIP].map((logoImg, index) => (
                          <div key={index} className="w-32 h-24 bg-white flex items-center justify-center border rounded shadow-sm">
                            <img src={logoImg} alt={`logo-${index}`} className="max-h-full max-w-full object-contain" />
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <div className="bg-white p-3 rounded-lg shadow-md border-2 border-gray-200 mb-2">
                          <QRCode value={certUrl} size={80} className="mx-auto" />
                        </div>
                        <p className="text-xs text-gray-500">Scan to verify</p>
                        <p className="text-xs text-gray-600 font-mono">{cert?.certificateId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-blue-300 opacity-50" />
                  <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-blue-300 opacity-50" />
                  <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-blue-300 opacity-50" />
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-blue-300 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom info ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            This certificate can be verified by scanning the QR code or visiting{" "}
            <span className="text-indigo-400 font-mono text-xs">{certUrl}</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
