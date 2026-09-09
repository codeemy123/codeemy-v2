"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Route, Layers, Target, ArrowRight, CheckCircle2 } from "lucide-react"

const SOLUTIONS = [
  {
    icon: Route,
    title: "Structured Learning Paths",
    description:
      "No more guessing. Follow a clear, domain-specific roadmap designed by industry experts — from fundamentals to job-ready skills.",
    iconBg: "linear-gradient(135deg, #a78bfa, #7c3aed)",
    accentColor: "#a78bfa",
    highlights: ["Expert-curated roadmaps", "Domain-specific tracks", "Beginner to advanced"],
  },
  {
    icon: Layers,
    title: "Practical, Project-Based Learning",
    description:
      "Every course includes real-world projects, case studies, and portfolio-worthy assignments — not just theory.",
    iconBg: "linear-gradient(135deg, #34d399, #059669)",
    accentColor: "#34d399",
    highlights: ["Real-world projects", "Portfolio-ready work", "Hands-on practice"],
  },
  {
    icon: Target,
    title: "Industry-Aligned Outcomes",
    description:
      "Our curriculum is co-designed with hiring companies. You learn exactly what employers want — across every domain we offer.",
    iconBg: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    accentColor: "#60a5fa",
    highlights: ["Company partnerships", "Current tech stacks", "Placement support"],
  },
]

export default function SolutionSection() {
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
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3"
          >
            The Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Here's How We{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #34d399, #60a5fa)",
              }}
            >
              Fix That
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-xl mx-auto"
          >
            We designed a learning experience that turns confusion into clarity
            and ambition into results.
          </motion.p>
        </div>

        {/* Bento grid — first card large, next two stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured card — spans full left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl p-8 md:p-10 group transition-all duration-300 hover:-translate-y-1 overflow-hidden md:row-span-2"
            style={{
              background: `linear-gradient(135deg, ${SOLUTIONS[0].accentColor}08, ${SOLUTIONS[0].accentColor}04)`,
              border: `1px solid ${SOLUTIONS[0].accentColor}25`,
            }}
          >
            {/* Animated gradient border effect */}
            <div
              className="absolute top-0 left-0 w-full h-[3px]"
              style={{
                background: SOLUTIONS[0].iconBg,
              }}
            />
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              {(() => {
                const Icon = SOLUTIONS[0].icon
                return (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: SOLUTIONS[0].iconBg,
                      boxShadow: `0 8px 32px ${SOLUTIONS[0].accentColor}30`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                )
              })()}
              <h3 className="text-2xl font-bold text-white mb-3">
                {SOLUTIONS[0].title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {SOLUTIONS[0].description}
              </p>

              {/* Highlights */}
              <div className="mt-auto space-y-3">
                {SOLUTIONS[0].highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: SOLUTIONS[0].accentColor }}
                    />
                    <span className="text-white/60 text-sm">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1 text-sm font-medium mt-8 transition-colors"
                style={{ color: SOLUTIONS[0].accentColor }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* Stacked cards — right column */}
          {SOLUTIONS.slice(1).map((sol, i) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                className="relative rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${sol.accentColor}06, ${sol.accentColor}03)`,
                  border: `1px solid ${sol.accentColor}20`,
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-4 bottom-4 left-0 w-[3px] rounded-r-full"
                  style={{ background: sol.iconBg }}
                />

                <div className="flex items-start gap-5 pl-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: sol.iconBg }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-4">
                      {sol.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sol.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2.5 py-1 rounded-lg font-medium"
                          style={{
                            color: `${sol.accentColor}`,
                            background: `${sol.accentColor}12`,
                            border: `1px solid ${sol.accentColor}20`,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
