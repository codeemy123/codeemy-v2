"use client"

import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Award,
  Monitor,
  Palette,
  Wrench,
  Briefcase,
  Code2,
  PenTool,
} from "lucide-react"

const TRUST_BADGES = [
  { value: "2000+", label: "Students Enrolled", icon: Users },
  { value: "95%", label: "Placement Rate", icon: TrendingUp },
  { value: "15+", label: "Domains Covered", icon: Award },
]

const CYCLE_WORDS = [
  { text: "Any Skill", color: "linear-gradient(135deg, #a78bfa, #818cf8, #60a5fa)" },
  { text: "Design", color: "linear-gradient(135deg, #ec4899, #f472b6, #fb7185)" },
  { text: "Code", color: "linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)" },
  { text: "Business", color: "linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)" },
  { text: "Engineering", color: "linear-gradient(135deg, #14b8a6, #34d399, #6ee7b7)" },
]

const ORBIT_ICONS = [
  { icon: Monitor, color: "#6366f1", label: "Tech" },
  { icon: Palette, color: "#ec4899", label: "Design" },
  { icon: Wrench, color: "#14b8a6", label: "CAD" },
  { icon: Briefcase, color: "#f59e0b", label: "Business" },
  { icon: Code2, color: "#818cf8", label: "Dev" },
  { icon: PenTool, color: "#f472b6", label: "Creative" },
]

export default function HeroSection() {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLE_WORDS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden noise-overlay"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(79,70,229,0.1) 0%, transparent 50%), linear-gradient(135deg, #0a0818 0%, #0f0c29 30%, #1a1145 60%, #13102e 100%)",
      }}
    >
      {/* Mesh gradient blobs */}
      <div
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "1.5s",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Main content — asymmetric split ────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left column — 3/5 width */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-8"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Multi-Domain Career Platform
            </motion.div>

            {/* Headline with word cycling */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
            >
              Shape Your Career.
              <br />
              <span className="relative inline-block">
                Master{" "}
                <span className="relative inline-block min-w-[200px] sm:min-w-[280px] text-left">
                  {CYCLE_WORDS.map((word, i) => (
                    <motion.span
                      key={word.text}
                      className="absolute left-0 bg-clip-text text-transparent whitespace-nowrap"
                      style={{ backgroundImage: word.color }}
                      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                      animate={{
                        opacity: i === wordIndex ? 1 : 0,
                        y: i === wordIndex ? 0 : i < wordIndex ? -30 : 30,
                        filter: i === wordIndex ? "blur(0px)" : "blur(8px)",
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {word.text}
                    </motion.span>
                  ))}
                  {/* Invisible text for width */}
                  <span className="invisible">Engineering</span>
                </span>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              From Technology and Design to CAD Engineering and Business — explore
              structured learning paths that prepare you for the real world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => navigate("/courses")}
                className="group relative px-8 py-4 rounded-2xl font-semibold text-white text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5 btn-shimmer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5, #7c3aed, #4f46e5)",
                  backgroundSize: "200% 100%",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Paths
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("how-it-works")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white/70 hover:text-white text-base transition-all duration-300 hover:bg-white/[0.05]"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                See How It Works
              </button>
            </motion.div>
          </div>

          {/* Right column — 2/5 width — Orbit visual (now visible on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Scale down on mobile to prevent horizontal overflow */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] transform scale-75 sm:scale-100">
              {/* Center Logo/Circle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none"
                style={{
                  width: "160px",
                  height: "160px",
                }}
              >
                <img
                  src="/logo_image.png"
                  alt="CodeEmy Logo"
                  className="w-full h-full object-contain scale-110"
                  style={{
                    filter: "drop-shadow(0px 4px 12px rgba(124,58,237,0.6))",
                    mixBlendMode: "screen",
                  }}
                />
              </div>

              {/* Orbit rings */}
              {[120, 170].map((r, ri) => (
                <div
                  key={r}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    border: `1px solid rgba(139,92,246,${0.12 - ri * 0.04})`,
                  }}
                />
              ))}

              {/* Orbiting icons */}
              {ORBIT_ICONS.map((item, i) => {
                const angle = (360 / ORBIT_ICONS.length) * i
                const radius = i % 2 === 0 ? 120 : 170
                const duration = i % 2 === 0 ? 20 : 28
                const Icon = item.icon
                const size = 44

                return (
                  <motion.div
                    key={item.label}
                    className="absolute"
                    style={{
                      width: radius * 2,
                      height: radius * 2,
                      top: `calc(50% - ${radius}px)`,
                      left: `calc(50% - ${radius}px)`,
                    }}
                    animate={{
                      rotate: [angle, angle + 360],
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Icon sits at the right edge (3 o'clock position) of the container */}
                    <motion.div
                      className="absolute flex items-center justify-center rounded-xl shadow-lg"
                      style={{
                        width: size,
                        height: size,
                        top: `calc(50% - ${size / 2}px)`,
                        right: -size / 2,
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                        boxShadow: `0 4px 20px ${item.color}44`,
                      }}
                      animate={{
                        rotate: [-angle, -angle - 360],
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Trust badges — seamless stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-20 flex justify-center px-4"
        >
          <div
            className="w-full max-w-xs sm:w-auto sm:max-w-none rounded-2xl overflow-hidden flex flex-col sm:flex-row sm:items-center"
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 60px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {TRUST_BADGES.map((badge, i) => {
              const Icon = badge.icon
              const gradients = [
                "linear-gradient(135deg, #a78bfa, #7c3aed)",
                "linear-gradient(135deg, #34d399, #059669)",
                "linear-gradient(135deg, #60a5fa, #3b82f6)",
              ]
              const glows = [
                "rgba(167,139,250,0.35)",
                "rgba(52,211,153,0.35)",
                "rgba(96,165,250,0.35)",
              ]
              return (
                <div key={badge.label} className="flex flex-col sm:flex-row sm:items-center">
                  {/* Horizontal divider on mobile, vertical on sm+ */}
                  {i > 0 && (
                    <div
                      className="h-px w-full sm:h-auto sm:self-stretch sm:w-px"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    />
                  )}
                  <div className="flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5">
                    {/* Circular glowing icon */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: gradients[i],
                        boxShadow: `0 0 18px ${glows[i]}`,
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg sm:text-xl leading-tight">
                        {badge.value}
                      </div>
                      <div className="text-white/40 text-xs mt-0.5 whitespace-nowrap">
                        {badge.label}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, #0f0c29 0%, transparent 100%)",
        }}
      />
    </section>
  )
}
