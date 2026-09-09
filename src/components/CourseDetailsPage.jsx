"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  Star, Clock, BookOpen, Award, CheckCircle, ChevronDown, ChevronUp,
  ArrowLeft, Users, TrendingUp, Briefcase, Zap, Brain, Target, Shield,
  Rocket, Medal, HeartHandshake, Laptop, Globe, MessageSquare, Play,
  ChevronRight, Sparkles, BadgeCheck, GraduationCap, PhoneCall
} from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import Testinomials from "./Testinomials"
import Faq from "./About/Faq"
import certificate from "../assets/certificate.png"
import codeemyLogo from "../assets/logo.png"
import course_details from "../data/CourseDetails"
import emailjs from "emailjs-com"
import MedicalCourseDetails from "./MedicalCourseDetails"

/* ─── Scroll-animation hook ─────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ─── Count-up hook ─────────────────────────────────────────── */
function useCountUp(target, duration = 1800, active = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return value
}

/* ─── Section wrapper ────────────────────────────────────────── */
function Section({ children, className = "" }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  )
}

/* ─── Company logos ──────────────────────────────────────────── */
const COMPANIES = [
  "Zoho", "Infosys", "Wipro", "TCS", "Capgemini",
  "Paytm", "Razorpay", "Swiggy", "Zomato", "Byju's",
  "Amazon", "Cognizant", "HCL", "Tech Mahindra", "Accenture"
]

/* ─── Value stack data ──────────────────────────────────────── */
const VALUE_STACK = [
  { label: "AI-Integrated Curriculum", value: 15000 },
  { label: "Live Mentorship Sessions", value: 10000 },
  { label: "Real-World Projects", value: 8000 },
  { label: "Internship Opportunity", value: 8000 },
  { label: "Placement Support", value: 8000 },
  { label: "Lifetime Access + Updates", value: 5000 },
]
const TOTAL_VALUE = VALUE_STACK.reduce((total, item) => total + item.value, 0)

/* ─── Learning journey steps ────────────────────────────────── */
const JOURNEY_STEPS = [
  { icon: Target, title: "Career Clarity Session", desc: "Understand your goals & map the right learning path" },
  { icon: BookOpen, title: "Seat Booking", desc: "Reserve your spot in the upcoming batch" },
  { icon: Brain, title: "Skill Assessment", desc: "Baseline evaluation to personalise your journey" },
  { icon: Rocket, title: "Welcome Kit", desc: "Resources, roadmap & tools to get you started" },
  { icon: Laptop, title: "Learning Begins", desc: "Live classes, recorded sessions & doubt clearing" },
  { icon: MessageSquare, title: "Live Mentor Sessions", desc: "1-on-1 and group mentorship every week" },
  { icon: Medal, title: "Weekly Challenges & Rewards", desc: "Gamified learning with badges & prizes" },
  { icon: Globe, title: "Freelance Exposure", desc: "Real client projects to build your portfolio" },
  { icon: Briefcase, title: "Internship Opportunity", desc: "Hands-on industry experience while you learn" },
  { icon: BadgeCheck, title: "Certification", desc: "Industry-recognised certificate on completion" },
  { icon: TrendingUp, title: "Placement Support", desc: "Resume prep, mock interviews & job referrals" },
  { icon: HeartHandshake, title: "Lifetime Learning Support", desc: "Community access & updates forever" },
]

/* ─── Why-Course cards ──────────────────────────────────────── */
const WHY_CARDS = [
  { icon: Zap, title: "AI-Powered Curriculum", desc: "Stay ahead with real AI tools integrated into every module", color: "from-violet-500 to-purple-600" },
  { icon: Brain, title: "Simplified Learning", desc: "Complex topics broken into digestible, practical sessions", color: "from-indigo-500 to-blue-600" },
  { icon: Users, title: "Expert Mentors", desc: "Industry professionals who guide you through every step", color: "from-fuchsia-500 to-pink-600" },
  { icon: MessageSquare, title: "24/7 Support", desc: "Dedicated support on WhatsApp, Telegram & doubt sessions", color: "from-cyan-500 to-teal-600" },
  { icon: TrendingUp, title: "Placement Assistance", desc: "100% placement support from resume to offer letter", color: "from-rose-500 to-orange-500" },
]

/* ─── Program power checklist ───────────────────────────────── */
const POWER_POINTS = [
  { icon: Brain, text: "AI-Integrated Learning Modules" },
  { icon: Laptop, text: "Hands-On Real Projects Only" },
  { icon: Users, text: "Live Expert Mentorship" },
  { icon: Briefcase, text: "Internship While You Study" },
  { icon: TrendingUp, text: "Dedicated Placement Cell" },
  { icon: Globe, text: "Lifetime Community Access" },
  { icon: Shield, text: "Industry-Recognised Certificate" },
  { icon: Rocket, text: "Freelance & Startup Exposure" },
]

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export function CourseDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [expandedModule, setExpandedModule] = useState(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })

  const course = course_details[id]

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const toggleModule = (moduleId) =>
    setExpandedModule(expandedModule === moduleId ? null : moduleId)

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      Course not found.
    </div>
  )

  if (course.category === "Medical") return (
    <MedicalCourseDetails course={course} journey={<LearningJourneySection course={course} />}>
      <ValueStackSection />
      <ProgramPowerSection medical />
      <CertificationSection course={{ ...course, certification: {
        title: `${course.title} — Certificate of Completion`,
        description: `Celebrate your completion of the ${course.title} program and showcase the practical skills developed through its 12-week curriculum.`,
        features: ["Course completion certificate", "Internship completion certificate", ...course.tools.slice(0, 3)],
      } }} />
      <EmotionalSection medical />
      <PricingSection id={id} navigate={navigate} medical />
      <div id="medical-enquiry"><FinalCTASection formData={formData} setFormData={setFormData} courseTitle={course.title} /></div>
    </MedicalCourseDetails>
  )

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#0f0c29 0%,#1a1040 40%,#0d1b2a 100%)" }}>

      {/* ── FLOATING BACK BUTTON ─────────────────────────────────────── */}
      <div className="fixed bottom-6 left-4 md:left-8 z-50">
        <button
          onClick={() => navigate("/courses")}
          aria-label="Back to Courses"
          className="group flex items-center justify-center w-12 h-12 bg-white/5 backdrop-blur-lg text-white rounded-full border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════
          1️⃣  HERO SECTION — NO PRICING
      ══════════════════════════════════════════════════════ */}
      <HeroSection course={course} id={id} navigate={navigate} />

      {/* ══════════════════════════════════════════════════════
          2️⃣  TRUST & SOCIAL PROOF
      ══════════════════════════════════════════════════════ */}
      <TrustSection />

      {/* ══════════════════════════════════════════════════════
          3️⃣  WHY THIS COURSE
      ══════════════════════════════════════════════════════ */}
      <WhyCourseSection />

      {/* ══════════════════════════════════════════════════════
          4️⃣  WHAT YOU WILL LEARN
      ══════════════════════════════════════════════════════ */}
      <WhatYouLearnSection course={course} expandedModule={expandedModule} toggleModule={toggleModule} />

      {/* ══════════════════════════════════════════════════════
          5️⃣  LEARNING JOURNEY TIMELINE
      ══════════════════════════════════════════════════════ */}
      <LearningJourneySection />

      {/* ══════════════════════════════════════════════════════
          6️⃣  VALUE STACK
      ══════════════════════════════════════════════════════ */}
      <ValueStackSection />

      {/* ══════════════════════════════════════════════════════
          7️⃣  PROGRAM POWER CHECKLIST
      ══════════════════════════════════════════════════════ */}
      <ProgramPowerSection />

      {/* ══════════════════════════════════════════════════════
          8️⃣  CERTIFICATION & OUTCOME
      ══════════════════════════════════════════════════════ */}
      <CertificationSection course={course} />

      {/* ══════════════════════════════════════════════════════
          9️⃣  EMOTIONAL BUILD-UP
      ══════════════════════════════════════════════════════ */}
      <EmotionalSection />

      {/* ══════════════════════════════════════════════════════
          🔟  FINAL PRICING REVEAL
      ══════════════════════════════════════════════════════ */}
      <PricingSection id={id} navigate={navigate} />

      {/* ══════════════════════════════════════════════════════
          1️⃣1️⃣  FINAL CTA — LEAD FORM
      ══════════════════════════════════════════════════════ */}
      <FinalCTASection formData={formData} setFormData={setFormData} courseTitle={course?.title} />

      {/* FAQ */}
      <div className="bg-white/5 backdrop-blur-sm">
        <Faq />
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   1️⃣  HERO
════════════════════════════════════════════════════════════════ */
function HeroSection({ course, id, navigate }) {
  const [ref, inView] = useInView(0.05)

  const stats = [
    { value: "500+", label: "Students Placed" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Hiring Partners" },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 animate-pulse"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse"
          style={{ background: "radial-gradient(circle,#2563eb,transparent 70%)", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle,#a855f7,transparent 60%)" }} />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {course.category} — Career Transformation Program
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {course.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ background: "linear-gradient(90deg,#c084fc,#60a5fa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {course.tagline || "Become Job-Ready with Real-World Skills in 90 Days"}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {course.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["✅ Placement Assistance", "🚀 Real-World Projects", "🧑‍🏫 Expert Mentorship"].map((h) => (
              <span key={h} className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => document.getElementById("learn-section")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full font-bold text-lg text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
              style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)" }}
            >
              Explore Program
            </button>
            <button
              onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Start Learning
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 px-3 text-center hover:border-purple-400/50 transition-all duration-300"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   2️⃣  TRUST & SOCIAL PROOF
════════════════════════════════════════════════════════════════ */
function TrustSection() {
  return (
    <section className="py-16 bg-white/[0.03] border-y border-white/10">


      {/* Testimonials carousel from existing component */}


      {/* Vertical Student Success Journey */}
      <div className="container mx-auto px-4 mt-16">
        <Section>
          <h2 className="text-3xl font-bold text-white text-center mb-2">From Student to Professional</h2>
          <p className="text-gray-400 text-center mb-12">The transformation journey our students experience</p>
          <VerticalSuccessJourney />
        </Section>
      </div>
    </section>
  )
}

function VerticalSuccessJourney() {
  const scrollRef = useRef(null)
  const isPausedRef = useRef(false)

  const profiles = [
    {
      name: "Ranjith",
      avatar: "/students/Ranjith.jpeg",
      company: "TechNow",
      companyColor: "#6366f1",
      previous: "Commerce Graduate",
      after: "AI Engineer",
    },
    {
      name: "Rakshitha",
      avatar: "/students/Rakshitha.jpeg",
      company: "Zomato",
      companyColor: "#ef4444",
      previous: "BCA Fresher",
      after: "Data Scientist",
    },
    {
      name: "Selva",
      avatar: "/students/selva.jpeg",
      company: "Infosys",
      companyColor: "#3b82f6",
      previous: "Unemployed",
      after: "Security Analyst",
    },
    {
      name: "Jenifer",
      avatar: "/students/jenifer.jpeg",
      company: "Meta",
      companyColor: "#2563eb",
      previous: "Student",
      after: "Sr. Developer",
    },
    {
      name: "Surya",
      avatar: "/students/Surya.jpeg",
      company: "Figma",
      companyColor: "#a855f7",
      previous: "BE Graduate",
      after: "Product Designer",
    },
    {
      name: "Deepak",
      avatar: "/students/Deepak.jpeg",
      company: "Wipro",
      companyColor: "#7c3aed",
      previous: "Mechanical Eng.",
      after: "Software Developer",
    },
  ]

  // Slow auto-scroll effect — pauses on hover
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const speed = 0.5 // pixels per frame
    let animId
    const tick = () => {
      if (!isPausedRef.current && el) {
        el.scrollLeft += speed
        // Loop back when reaching the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0
        }
      }
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" })
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => (isPausedRef.current = false)}
    >
      {/* Scroll arrows */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
        style={{ left: "-12px" }}
      >
        <ChevronDown className="w-5 h-5 -rotate-90" />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
        style={{ right: "-12px" }}
      >
        <ChevronDown className="w-5 h-5 rotate-90" />
      </button>

      {/* Horizontal scroll container — mask-image fades edges without needing to match bg color */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide px-2"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
        }}
      >
        {profiles.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 group"
            style={{ scrollSnapAlign: "center" }}
          >
            {/* Top section — Photo + Name + Company */}
            <div className="pt-8 pb-4 px-6 flex flex-col items-center text-center">
              {/* Circular photo */}
              <div
                className="w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300"
                style={{
                  border: `3px solid ${p.companyColor}60`,
                  boxShadow: `0 0 20px ${p.companyColor}25`,
                }}
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="text-white font-bold text-lg mb-2">{p.name}</h4>

              {/* Company "logo" */}
              <div
                className="text-lg font-extrabold tracking-tight"
                style={{ color: p.companyColor }}
              >
                {p.company}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 h-[1px] bg-white/10" />

            {/* Bottom section — Mini timeline */}
            <div className="px-6 py-5">
              {/* Single container with absolute vertical line */}
              <div className="relative" style={{ paddingLeft: 24 }}>
                {/* Continuous vertical line — centered on the 12px left axis */}
                <div
                  className="absolute top-[6px] bottom-[8px]"
                  style={{ left: 11, width: 2, background: `linear-gradient(to bottom, rgba(107,114,128,0.4), ${p.companyColor}50, rgba(16,185,129,0.5))` }}
                />

                {/* Row 1: Previous role */}
                <div className="flex items-center mb-5" style={{ marginLeft: -24 }}>
                  <div className="w-[24px] flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full border-2 border-gray-500 bg-[#0f0c29]" />
                  </div>
                  <div className="text-gray-400 text-sm font-medium ml-3">{p.previous}</div>
                </div>

                {/* Row 2: After CodeEmy */}
                <div className="flex items-center mb-5" style={{ marginLeft: -24 }}>
                  <div className="w-[24px] flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-[#0f0c29] border border-white/20">
                      <img src={codeemyLogo} alt="CodeEmy" className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-purple-300 ml-3">After CodeEmy</div>
                </div>

                {/* Row 3: Current role */}
                <div className="flex items-center" style={{ marginLeft: -24 }}>
                  <div className="w-[24px] flex items-center justify-center flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-emerald-400/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div
                    className="text-sm font-bold text-emerald-400 ml-3"
                  >
                    {p.after}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   3️⃣  WHY THIS COURSE
════════════════════════════════════════════════════════════════ */
function WhyCourseSection() {
  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Section>
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-purple-400/30 mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why This Course is Different</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Every feature is designed to get you hired faster.</p>
          </div>

          {/* Slanted image strip */}
          <div className="flex justify-center gap-4 mb-14 overflow-hidden">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:z-10 flex-shrink-0"
                style={{
                  width: "220px",
                  height: "150px",
                  borderRadius: i === 0 ? "48px 8px 48px 8px" : i === 1 ? "8px 48px 8px 48px" : "48px 8px 48px 8px",
                  boxShadow: "0 0 30px rgba(124,58,237,0.3)"
                }}
              >
                <img
                  src={src}
                  alt="Learning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent" />
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHY_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  className="group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-7 cursor-default overflow-hidden transition-all duration-400 hover:border-purple-400/50 hover:-translate-y-1"
                  style={{ transitionDuration: "350ms" }}
                >
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${card.color} rounded-2xl transition-opacity duration-400`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              )
            })}
            {/* 5th card spans full on odd (centered) */}
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   4️⃣  WHAT YOU WILL LEARN (accordion)
════════════════════════════════════════════════════════════════ */
function WhatYouLearnSection({ course, expandedModule, toggleModule }) {
  const outcomes = [
    { icon: Rocket, text: "Build & deploy real-world applications" },
    { icon: Briefcase, text: "Crack technical interviews with confidence" },
    { icon: Globe, text: "Contribute to live projects and freelance" },
    { icon: Medal, text: "Build a professional GitHub portfolio" },
  ]

  return (
    <section id="learn-section" className="py-20 bg-white/[0.02] border-y border-white/10">
      <div className="container mx-auto px-4">
        <Section>
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-400/30 mb-4">Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Will Learn</h2>
            <p className="text-gray-400 text-lg">Skills, not just theory. Built for real jobs.</p>
          </div>

          {/* Outcome pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {outcomes.map((o, i) => {
              const Icon = o.icon
              return (
                <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2.5 text-sm text-white font-medium backdrop-blur-sm">
                  <Icon className="w-4 h-4 text-purple-400" />
                  {o.text}
                </div>
              )
            })}
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto space-y-3">
            {course.syllabus.map((module) => (
              <div
                key={module.id}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.05] backdrop-blur-sm hover:border-purple-400/40 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">{module.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{module.lessons} lessons · {module.duration}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 ml-4 flex-shrink-0">
                    {expandedModule === module.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ${expandedModule === module.id ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="grid sm:grid-cols-2 gap-2 mt-4">
                      {module.topics.map((t, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   5️⃣  LEARNING JOURNEY TIMELINE
════════════════════════════════════════════════════════════════ */
function LearningJourneySection({ course } = {}) {
  const steps = course?.category === "Medical" ? [
    { icon: Target, title: "Career Clarity Session", desc: `Explore the ${course.careers[0]} career path and choose your learning goals.` },
    { icon: BookOpen, title: "Seat Booking", desc: `Enquire about enrollment in the ${course.duration} ${course.title} program.` },
    { icon: Brain, title: "Skill Assessment", desc: `Review your understanding of ${course.syllabus[0].title.toLowerCase()}.` },
    { icon: Rocket, title: "Learning Resources", desc: "Explore your 12-week syllabus, weekly topics and practical project roadmap." },
    { icon: Laptop, title: "Learning Begins", desc: `Start with ${course.syllabus[0].title.toLowerCase()} and progress through specialist skills.` },
    { icon: MessageSquare, title: "Guided Practice", desc: `Apply ${course.tools.slice(0, 3).join(", ")} concepts to program exercises.` },
    { icon: Medal, title: "Weekly Challenges", desc: "Practice each week's topics through the project included in every module." },
    { icon: Globe, title: "Healthcare Case Simulations", desc: course.projects[0].description },
    { icon: Briefcase, title: "Capstone Project", desc: course.projects[course.projects.length - 1].title },
    { icon: BadgeCheck, title: "Certification", desc: "Showcase your CodeEmy course completion and internship completion certificates." },
    { icon: TrendingUp, title: "Career Preparation", desc: `Prepare your resume and practice interviews for roles such as ${course.careers.slice(0, 2).join(" and ")}.` },
    { icon: HeartHandshake, title: "Continue Your Learning", desc: "Revisit course resources and strengthen your skills through continued case practice." },
  ] : JOURNEY_STEPS
  const [ref, inView] = useInView(0.05)
  const [visibleSteps, setVisibleSteps] = useState(0)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const iv = setInterval(() => {
      i++
      setVisibleSteps(i)
      if (i >= steps.length) clearInterval(iv)
    }, 180)
    return () => clearInterval(iv)
  }, [inView, steps.length])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-green-500/20 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-green-400/30 mb-4">Your Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Your Learning Journey</h2>
            <p className="text-gray-400 text-lg">From zero to career-ready, step-by-step with us.</p>
          </div>

          <div className="max-w-2xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />
            {/* Animated progress line */}
            <div
              className="absolute left-7 top-0 w-[2px] rounded-full transition-all duration-1000"
              style={{
                height: `${(visibleSteps / steps.length) * 100}%`,
                background: "linear-gradient(to bottom, #7c3aed, #2563eb, #059669)"
              }}
            />

            <div className="space-y-5">
              {steps.map((step, i) => {
                const Icon = step.icon
                const visible = i < visibleSteps
                return (
                  <div
                    key={i}
                    className={`relative flex items-start gap-5 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {/* Icon dot */}
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 transition-all duration-500 ${visible ? "border-purple-500 bg-purple-600/30 shadow-[0_0_16px_rgba(124,58,237,0.5)]" : "border-white/20 bg-white/5"}`}
                    >
                      <Icon className={`w-6 h-6 ${visible ? "text-purple-300" : "text-gray-500"}`} />
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0f0c29]" style={{ display: i < steps.length - 1 ? "block" : "none" }} />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-white/[0.06] border rounded-2xl p-4 transition-all duration-500 ${visible ? "border-purple-400/30" : "border-white/10"}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-purple-400 font-semibold">Step {i + 1}</span>
                      </div>
                      <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   6️⃣  VALUE STACK
════════════════════════════════════════════════════════════════ */
function ValueItem({ label, value, active, delay }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-4 px-2 border-b border-white/10 transition-all duration-600 ${active ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <span className="text-gray-200 font-medium">{label}</span>
      </div>
      <span className="shrink-0 text-green-400 font-bold text-base sm:text-lg">
        ₹{value.toLocaleString("en-IN")}
      </span>
    </div>
  )
}

function ValueStackSection() {
  const [ref, inView] = useInView(0.2)

  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/10">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-yellow-400/30 mb-4">Program Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything You Get</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Explore the learning resources and support included in your program.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Value rows */}
            <div className="bg-white/[0.07] border border-white/15 rounded-3xl p-8 backdrop-blur-md mb-6">
              {VALUE_STACK.map((item, i) => (
                <ValueItem key={item.label} label={item.label} value={item.value} active={inView} delay={i * 150} />
              ))}
              <div
                className="mt-6 rounded-2xl p-6 text-center"
                style={{
                  background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(37,99,235,0.3))",
                  border: "2px solid rgba(124,58,237,0.5)",
                  boxShadow: "0 0 40px rgba(124,58,237,0.3)",
                }}
              >
                <div className="text-gray-300 text-sm uppercase tracking-widest mb-2">Total Program Value</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                  ₹{TOTAL_VALUE.toLocaleString("en-IN")}<span className="text-purple-300">+</span>
                </div>
                <div className="mt-3 text-purple-300 text-sm font-medium">🔥 You get ALL of this. Way less than the total value.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   7️⃣  PROGRAM POWER CHECKLIST
════════════════════════════════════════════════════════════════ */
function ProgramPowerSection({ medical = false }) {
  const points = medical ? [
    { icon: BookOpen, text: "12-Week Structured Curriculum" },
    { icon: Laptop, text: "Hands-On Healthcare Case Studies" },
    { icon: Brain, text: "Specialist Medical Skills" },
    { icon: Briefcase, text: "Practical Capstone Training" },
    { icon: TrendingUp, text: "Resume & Interview Preparation" },
    { icon: Globe, text: "Healthcare Workflow Practice" },
    { icon: Shield, text: "CodeEmy Completion Certificate" },
    { icon: Rocket, text: "Portfolio-Building Projects" },
  ] : POWER_POINTS
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Section>
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-indigo-400/30 mb-4">Power Features</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Makes This Program Powerful</h2>
            <p className="text-gray-400 text-lg">{medical ? "Build healthcare skills through structured learning and simulated industry workflows." : "A curriculum designed with hiring managers — not just teachers."}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {points.map((pt, i) => {
              const Icon = pt.icon
              return (
                <div
                  key={i}
                  className="group flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium">{pt.text}</span>
                </div>
              )
            })}
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   8️⃣  CERTIFICATION & OUTCOME
════════════════════════════════════════════════════════════════ */
function CertificationSection({ course }) {
  const [ref, inView] = useInView(0.2)
  const medical = course.category === "Medical"

  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/10">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-amber-400/30 mb-4">Credential</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Your Certificate of Excellence</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">{medical ? "Showcase your healthcare learning and practical program completion." : "Recognised by top companies and recruiters across India and globally."}</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            {/* Certificate card with glow */}
            <div
              className={`relative w-full max-w-sm min-w-0 flex-shrink-0 transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(250,204,21,0.25), 0 0 120px rgba(124,58,237,0.2)" }}
              >
                <img
                  src={certificate}
                  alt="Certificate Preview"
                  className="w-full max-w-sm rounded-3xl border-2 border-amber-400/30"
                />
              </div>
              {/* Floating badge */}
              {medical && <p className="text-xs text-gray-400 text-center mt-3">Sample certificate — issued with your name and program.</p>}
              <div className="absolute -top-4 right-0 sm:-right-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-3 shadow-xl animate-bounce" style={{ animationDuration: "3s" }}>
                <Award className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-3">{course.certification?.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{course.certification?.description}</p>

              <div className="space-y-4">
                {(medical ? [
                  { icon: BadgeCheck, text: "CodeEmy Course Completion", color: "text-green-400" },
                  { icon: Globe, text: "Showcase Your Healthcare Skills", color: "text-blue-400" },
                  { icon: GraduationCap, text: "Internship Completion Certificate", color: "text-purple-400" },
                  { icon: TrendingUp, text: "Highlight Your Learning in Your Portfolio", color: "text-amber-400" },
                ] : [
                  { icon: BadgeCheck, text: "Industry-Recognised Credential", color: "text-green-400" },
                  { icon: Globe, text: "Globally Accepted — Add on LinkedIn", color: "text-blue-400" },
                  { icon: GraduationCap, text: "Verified & Tamper-Proof Certificate", color: "text-purple-400" },
                  { icon: TrendingUp, text: "Proven Resume Boost — 3× More Callbacks", color: "text-amber-400" },
                ]).map((it, i) => {
                  const Icon = it.icon
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4 transition-all duration-500 hover:border-purple-400/40 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                      style={{ transitionDelay: `${300 + i * 120}ms` }}
                    >
                      <Icon className={`w-5 h-5 ${it.color} flex-shrink-0`} />
                      <span className="text-gray-200 text-sm font-medium">{it.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Certification features */}
              {course.certification?.features && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {course.certification.features.map((f, i) => (
                    <span key={i} className="text-xs bg-white/10 border border-white/15 text-gray-300 px-3 py-1.5 rounded-full">{f}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   9️⃣  EMOTIONAL BUILD-UP
════════════════════════════════════════════════════════════════ */
function EmotionalSection({ medical = false }) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Section>
          <div
            className="max-w-3xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,rgba(124,58,237,0.25) 0%,rgba(37,99,235,0.2) 50%,rgba(5,150,105,0.15) 100%)",
              border: "1px solid rgba(124,58,237,0.3)",
              boxShadow: "0 0 80px rgba(124,58,237,0.15)"
            }}
          >
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)", transform: "translate(40%,-40%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle,#2563eb,transparent 70%)", transform: "translate(-40%,40%)" }} />

            <div className="relative z-10">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                This is not just a course.
                <br /><span className="text-transparent" style={{ background: "linear-gradient(90deg,#c084fc,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>It&apos;s your career transformation.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                {medical ? "Build confidence for healthcare and clinical research roles through structured lessons, simulated cases, practical projects and interview preparation." : "Every lesson, every project, every mentor session — crafted with one goal: to make you hireable, confident, and unstoppable in the tech world."}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-left">
                {[
                  { icon: "⚡", heading: "Job-Ready Skills", sub: "Built for real interviews" },
                  { icon: "🗂️", heading: "Strong Portfolio", sub: "Live projects that impress" },
                  { icon: "💬", heading: "Interview Confidence", sub: "Mock prep + career coaching" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center backdrop-blur-sm">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-white font-bold text-base mb-1">{item.heading}</div>
                    <div className="text-gray-400 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   🔟  FINAL PRICING REVEAL
════════════════════════════════════════════════════════════════ */
function PricingSection({ id, navigate, medical = false }) {
  const [ref, inView] = useInView(0.3)

  return (
    <section id="pricing-section" className="py-20 bg-white/[0.02] border-y border-white/10">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-10">
            <span className="inline-block bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-rose-400/30 mb-4">Join the Program</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Your Learning Journey</h2>
            <p className="text-gray-400 text-lg">Build your skills with expert guidance and structured learning.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div
              className={`rounded-3xl p-10 text-center relative overflow-hidden transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{
                background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(37,99,235,0.3))",
                border: "2px solid rgba(124,58,237,0.5)",
                boxShadow: inView ? "0 0 80px rgba(124,58,237,0.4)" : "none",
                transitionDelay: "200ms"
              }}
            >
              {/* Urgency badges */}
              <div className="flex justify-center gap-3 mb-6">
                <span className="bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-semibold px-3 py-1 rounded-full animate-pulse">🔴 Limited Seats</span>
                <span className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">⏳ Next Batch Closing Soon</span>
              </div>

              {/* What's included quick list */}
              {medical && <div className="mb-8">
                <div className="text-gray-400 line-through mb-2">₹24,999</div>
                <div className="text-5xl sm:text-7xl font-extrabold text-white mb-4">₹14,999</div>
                <span className="inline-block rounded-full bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-bold px-4 py-2">You Save ₹10,000 — 40% OFF</span>
              </div>}
              <div className="text-left space-y-2 mb-8">
                {(medical ? ["12-week medical curriculum", "Healthcare case simulations", "Practical capstone projects", "Resume and interview preparation", "CodeEmy completion certificates"] : ["All program resources listed above", "AI-powered curriculum access", "Placement + internship support", "Lifetime community access", "Industry certificate"]).map((it, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-200 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {it}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => medical ? document.getElementById("medical-enquiry")?.scrollIntoView({ behavior: "smooth" }) : navigate(`/payment/${id}`)}
                className="w-full py-5 rounded-2xl text-white font-bold text-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                  boxShadow: "0 0 30px rgba(124,58,237,0.6), 0 4px 20px rgba(0,0,0,0.3)",
                  animation: inView ? "pulse 2s ease-in-out infinite" : "none"
                }}
              >
                🚀 Enroll Now — Secure Your Seat
              </button>

              <p className="text-gray-500 text-xs mt-4">Expert mentorship · Structured learning · Community support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════════════
   1️⃣1️⃣  FINAL CTA — LEAD FORM
════════════════════════════════════════════════════════════════ */
function FinalCTASection({ formData, setFormData, courseTitle }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      setLoading(true)
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        query: `Lead from Course Page: ${courseTitle || "Unknown Course"}`, 
      }

      emailjs
        .send(
          "service_3lf03w8",
          "template_etke5qk",
          payload,
          "rPCZwLcm9ZTYsdCku"
        )
        .then(
          () => {
            setSubmitted(true)
            setLoading(false)
            setFormData({ name: "", email: "", phone: "" })
          },
          (error) => {
            console.error(error)
            setLoading(false)
            alert("Oops! Something went wrong. Please try again.")
          }
        )
    }
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Section>
          <div
            className="max-w-2xl mx-auto rounded-3xl p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#0f0c29,#1a1040)",
              border: "1px solid rgba(124,58,237,0.4)",
              boxShadow: "0 0 60px rgba(0,0,0,0.5)"
            }}
          >
            <div className="text-center mb-10">
              <PhoneCall className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Start Your Journey Today</h2>
              <p className="text-gray-400 text-lg">Drop your details — our counsellor will call you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on your way!</h3>
                <p className="text-gray-400">We'll reach out to you shortly. Get ready to transform! 🚀</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[key]}
                      onChange={(e) => setFormData(p => ({ ...p, [key]: e.target.value }))}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition-all text-sm"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: loading 
                      ? "rgba(124,58,237,0.5)" 
                      : "linear-gradient(135deg,#7c3aed,#2563eb)",
                    boxShadow: loading ? "none" : "0 0 20px rgba(124,58,237,0.4)"
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get a Free Counselling Call 📞"
                  )}
                </button>

                <p className="text-center text-gray-600 text-xs">✅ No spam. Your information is 100% secure.</p>
              </form>
            )}
          </div>
        </Section>
      </div>
    </section>
  )
}
