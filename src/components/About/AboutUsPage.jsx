import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/Card"
import Faq from "./Faq"
import {
  GraduationCap,
  Target,
  Eye,
  MapPin,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Code,
  MessageSquare,
  Globe,
  Star,
  CheckCircle,
  Rocket,
  ArrowRight,
  Zap,
  Brain,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

/* ── Scroll reveal ── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ── Animated count-up ── */
function CountUp({ target, suffix = "", active }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1600, 1)
      setVal(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target])
  return <>{val}{suffix}</>
}

export function AboutUsPage() {
  const navigate = useNavigate()
  const [statsRef, statsInView] = useInView(0.2)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">

      {/* ══════════════════════════════════════════
          HERO — Modern split with gradient brand side
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-700" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-violet-400/20 blur-3xl" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — Text */}
            <div className="space-y-7">
              <Badge className="bg-white/15 text-white border-white/25 hover:bg-white/25 w-fit">
                <Star className="w-3.5 h-3.5 mr-2 fill-yellow-300 text-yellow-300" />
                India's #1 Career-First EdTech
              </Badge>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-white tracking-tight mb-4">
                  About{" "}
                  <span className="text-violet-200 italic">CodeEmy</span>
                </h1>
                <p className="text-lg md:text-xl text-purple-100/80 leading-relaxed max-w-xl">
                  We didn't set out to build another EdTech company. We set out to change what education means
                  for India's next generation of professionals.
                </p>
              </div>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: BookOpen, label: "Learn" },
                  { icon: TrendingUp, label: "Grow" },
                  { icon: Briefcase, label: "Get Placed" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate("/courses")}
                className="group inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-7 py-3.5 rounded-2xl hover:bg-violet-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-sm"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right — Floating card panel */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=420&q=80"
                alt="CodeEmy students"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              {/* Floating stat badge */}
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-2xl border border-purple-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900 text-lg leading-tight">2,000+</div>
                  <div className="text-gray-500 text-xs">Students Empowered</div>
                </div>
              </div>
              {/* Floating location badge */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-purple-100">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Coimbatore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#faf5ff" fillOpacity="0.5"/>
            <path d="M0 60L1440 60L1440 30C1100 70 700 10 400 35C200 50 100 25 0 35L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — Horizontal ticker bar
      ══════════════════════════════════════════ */}
      <section ref={statsRef} className="py-0 bg-white border-b border-purple-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-purple-100">
            {[
              { value: 2000, suffix: "+", label: "Students Enrolled", icon: Users, accent: "text-purple-600" },
              { value: 95,   suffix: "%", label: "Placement Rate",    icon: TrendingUp, accent: "text-emerald-600" },
              { value: 50,   suffix: "+", label: "Hiring Partners",   icon: Briefcase, accent: "text-blue-600" },
              { value: 15,   suffix: "+", label: "Domains Covered",   icon: Globe, accent: "text-amber-600" },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="flex-1 flex items-center gap-4 px-8 py-7">
                  <Icon className={`w-6 h-6 flex-shrink-0 ${s.accent}`} />
                  <div>
                    <div className={`text-2xl font-extrabold ${s.accent} leading-none`}>
                      <CountUp target={s.value} suffix={s.suffix} active={statsInView} />
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5 font-medium">{s.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BUILT DIFFERENT — 3-col asymmetric strip
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">Why CodeEmy</p>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Wide featured block */}
            <div className="lg:flex-[2] rounded-3xl overflow-hidden relative min-h-[260px] flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "24px 24px" }} />
              <MapPin className="w-10 h-10 text-white/30 mb-4" />
              <h3 className="text-2xl font-extrabold text-white mb-2">Rooted in Coimbatore,<br />Reaching All of India</h3>
              <p className="text-purple-200 text-sm leading-relaxed max-w-md">
                What started in a small classroom in Tamil Nadu is now shaping careers across the country.
                Local heart. National impact.
              </p>
            </div>
            {/* 2 stacked narrower blocks */}
            <div className="lg:flex-[1] flex flex-col gap-6">
              <div className="rounded-3xl border-2 border-purple-100 p-7 flex-1">
                <CheckCircle className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-extrabold text-gray-900 text-lg mb-1">NEP 2020 Aligned</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Curriculum built to the future — meeting national digital learning standards.
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-7 flex-1">
                <Award className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-extrabold text-gray-900 text-lg mb-1">Outcomes, Not Certificates</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every program is measured by placements and real career results — not just graduation counts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISSION — Large quote + side image
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Text — 3 cols */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Our Mission</span>
              </div>

              {/* Big pull-quote */}
              <blockquote className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                "Where you <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">start</span>{" "}
                should never decide where you{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">end up.</span>"
              </blockquote>

              <p className="text-gray-600 leading-relaxed max-w-xl">
                At CodeEmy, we bridge the gap between academic knowledge and industry expectations —
                through practical training, expert mentorship, certifications, internships, and placement
                support that create real career outcomes, not just graduation photos.
              </p>

              {/* Inline checklist, horizontal */}
              <div className="flex flex-wrap gap-3">
                {["Skill-first Curriculum", "Affordable Access", "Live Mentorship", "Placement from Day 1"].map((item) => (
                  <span key={item}
                    className="inline-flex items-center gap-1.5 bg-white border border-purple-200 text-purple-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image — 2 cols */}
            <div className="lg:col-span-2 relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=560&q=80"
                alt="Our Mission"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ height: "360px" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-bold">
                Since 2022 · Coimbatore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISION — Full-bleed with large number
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — image with overlapping stat */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=420&q=80"
                alt="Our Vision"
                className="rounded-3xl shadow-xl w-full object-cover h-[360px]"
              />
              {/* Big number watermark */}
              <div className="absolute -right-6 -top-6 text-[120px] font-black leading-none select-none pointer-events-none"
                style={{ color: "transparent", WebkitTextStroke: "2px rgba(139,92,246,0.12)" }}>
                2030
              </div>
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-3 shadow-xl border border-indigo-100">
                <div className="text-2xl font-extrabold text-indigo-700">1M+</div>
                <div className="text-gray-400 text-xs">Learners by 2030</div>
              </div>
            </div>

            {/* Right — vision content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-600">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                India's most{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  trusted and transformative
                </span>{" "}
                EdTech platform.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every learner — regardless of background, city, or income — has access to
                the skills, mentorship, and opportunities that were once reserved for the privileged few.
              </p>

              {/* Vision pillars — horizontal icon+text rows */}
              <div className="space-y-3 pt-2">
                {[
                  { icon: Globe, label: "Pan-India Digital Access", color: "text-indigo-500 bg-indigo-50" },
                  { icon: Users, label: "Equal Opportunity, No Exceptions", color: "text-violet-500 bg-violet-50" },
                  { icon: TrendingUp, label: "Measurable Career Outcomes", color: "text-purple-500 bg-purple-50" },
                  { icon: Rocket, label: "Lifelong Learner Community", color: "text-fuchsia-500 bg-fuchsia-50" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE OFFER — Horizontal scroll strip
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-3">Programs</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What We Offer</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Career-focused programs built hand-in-hand with industry — not just textbooks.
            </p>
          </div>

          {/* 3×2 grid with non-uniform sizing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Code,          title: "Python Programming",    desc: "Hands-on Python with projects employers actually care about.", accent: "border-l-blue-500",   bg: "bg-blue-50",    text: "text-blue-700" },
              { icon: TrendingUp,    title: "Digital Marketing",      desc: "SEO, ads, content — become the marketer brands compete for.", accent: "border-l-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700" },
              { icon: MessageSquare, title: "Communication Skills",   desc: "From hesitant speaker to confident professional in 90 days.", accent: "border-l-fuchsia-500", bg: "bg-fuchsia-50", text: "text-fuchsia-700" },
              { icon: GraduationCap, title: "Expert Mentorship",      desc: "1-on-1 guidance from people who've actually hired at your dream company.", accent: "border-l-purple-500",  bg: "bg-purple-50",  text: "text-purple-700" },
              { icon: Award,         title: "Certifications",         desc: "Industry-recognised certificates that open real doors.",  accent: "border-l-rose-500",   bg: "bg-rose-50",    text: "text-rose-700" },
              { icon: Briefcase,     title: "Placement Support",      desc: "Resume, mock interviews, referrals — we don't stop until you're hired.", accent: "border-l-teal-500",   bg: "bg-teal-50",    text: "text-teal-700" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title}
                  className={`rounded-2xl bg-white border-l-4 ${item.accent} p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${item.text}`} />
                  </div>
                  <h3 className={`font-extrabold ${item.text} text-base mb-1.5`}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-white">
        <Faq />
      </div>

      {/* ══════════════════════════════════════════
          CTA — Asymmetric split, not a banner
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,white 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left text */}
            <div className="max-w-xl">
              <Badge className="bg-white/15 text-white border-white/25 mb-6 inline-flex">
                <Rocket className="w-3.5 h-3.5 mr-2" /> Your transformation starts today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Rewrite<br />Your Story?
              </h2>
              <p className="text-purple-100/75 text-lg leading-relaxed">
                Join 2,000+ learners who chose skills over shortcuts.
                Whether you're a student, graduate, or career-switcher — we have the right program for you.
              </p>
            </div>
            {/* Right buttons — stacked vertically for premium feel */}
            <div className="flex flex-col gap-4 w-full max-w-xs flex-shrink-0">
              <button
                className="group flex items-center justify-between bg-white text-purple-700 font-bold px-7 py-4 rounded-2xl hover:bg-violet-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl w-full"
                onClick={() => navigate("/courses")}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="flex items-center justify-between border-2 border-white/30 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full"
                onClick={() => navigate("/contact")}
              >
                Talk to an Advisor
                <ArrowRight className="w-5 h-5 opacity-50" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
