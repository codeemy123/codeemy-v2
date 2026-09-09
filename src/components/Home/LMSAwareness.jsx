"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  LayoutDashboard,
  Video,
  FileText,
  BarChart3,
} from "lucide-react"

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    desc: "Track progress, manage courses, and view your learning analytics — all in one place.",
    color: "#a78bfa",
  },
  {
    icon: Video,
    title: "Live & Recorded Sessions",
    desc: "Attend live classes or revisit recorded lectures anytime at your own pace.",
    color: "#60a5fa",
  },
  {
    icon: FileText,
    title: "Projects & Assessments",
    desc: "Submit assignments, complete projects, and get feedback from expert mentors.",
    color: "#34d399",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Visual analytics showing your skill growth, completion rates, and milestones.",
    color: "#fbbf24",
  },
]

export default function LMSAwareness() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #13102e 0%, #0f0c29 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header — centered */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
          >
            Your Learning Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Everything You Need,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              }}
            >
              One Dashboard
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-2xl mx-auto"
          >
            Your learning happens on a dedicated platform built for focus and
            results. No distractions — just a clean, powerful dashboard.
          </motion.p>
        </div>

        {/* Dashboard mockup — full width with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          {/* Glow behind */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.15)",
            }}
          />

          {/* Dashboard card with perspective */}
          <div
            className="relative rounded-3xl p-6 md:p-8 overflow-hidden scan-line-overlay"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              transform: "perspective(1200px) rotateX(2deg)",
            }}
          >
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <div
                className="flex-1 h-7 rounded-lg ml-3 flex items-center px-3"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <span className="text-white/20 text-[10px]">dashboard.codeemy.com</span>
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="space-y-4">
              {/* Top stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Courses", val: "4", color: "#a78bfa" },
                  { label: "Completed", val: "67%", color: "#34d399" },
                  { label: "Streak", val: "12d", color: "#fbbf24" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-lg font-bold text-white">
                      {s.val}
                    </div>
                    <div className="text-white/30 text-[10px] font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar mock */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/50">React Mastery</span>
                  <span className="text-purple-400 font-medium">72%</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #60a5fa)",
                    }}
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "72%" } : {}}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </div>
              </div>

              {/* Course list mock */}
              {["UI/UX Fundamentals", "AutoCAD Basics", "Digital Marketing"].map(
                (c, i) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-xl p-3"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #ec4899, #db2777)"
                            : i === 1
                              ? "linear-gradient(135deg, #14b8a6, #0d9488)"
                              : "linear-gradient(135deg, #f59e0b, #d97706)",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">
                        {c}
                      </div>
                      <div className="text-white/25 text-[10px]">
                        In Progress
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Floating annotation labels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-16 -right-2 md:right-4 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px]" style={{ background: "rgba(167,139,250,0.4)" }} />
                <div
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                  style={{
                    color: "#a78bfa",
                    background: "rgba(167,139,250,0.1)",
                    border: "1px solid rgba(167,139,250,0.2)",
                  }}
                >
                  Real-time Stats
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-24 -left-2 md:left-4 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                  style={{
                    color: "#34d399",
                    background: "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.2)",
                  }}
                >
                  Live Progress
                </div>
                <div className="w-8 h-[1px]" style={{ background: "rgba(52,211,153,0.4)" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features — horizontal strip of cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="rounded-xl p-5 text-center group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `${feat.color}06`,
                  border: `1px solid ${feat.color}15`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${feat.color}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {feat.title}
                </h4>
                <p className="text-white/35 text-xs leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
