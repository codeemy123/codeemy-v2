"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, UserPlus, BookOpen, TrendingUp } from "lucide-react"

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Domain",
    description:
      "Explore Technology, Design, Engineering, or Business — pick the field that matches your ambition.",
    gradient: "linear-gradient(135deg, #a78bfa, #7c3aed)",
    accentColor: "#a78bfa",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Enroll & Get Matched",
    description:
      "Sign up for a structured path and get paired with an expert mentor who guides your progress.",
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    accentColor: "#60a5fa",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Learn on Our LMS",
    description:
      "Access course materials, live sessions, projects, and assessments through your personalized dashboard.",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
    accentColor: "#34d399",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow & Get Placed",
    description:
      "Build your portfolio, earn certifications, and access placement support to launch your career.",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    accentColor: "#fbbf24",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a1145 0%, #0f0c29 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Your Journey in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              }}
            >
              4 Simple Steps
            </span>
          </motion.h2>
        </div>

        {/* Zigzag steps */}
        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              background: "linear-gradient(180deg, rgba(139,92,246,0.3) 0%, rgba(96,165,250,0.3) 33%, rgba(52,211,153,0.3) 66%, rgba(245,158,11,0.3) 100%)",
            }}
          />

          <div className="space-y-12 md:space-y-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
                  className="relative md:py-8"
                >
                  {/* Mobile left line — only between steps, not above first */}
                  {i > 0 && i < STEPS.length - 1 && (
                    <div className="md:hidden absolute top-0 bottom-0 left-6 w-[2px]"
                      style={{
                        background: `linear-gradient(180deg, ${step.accentColor}40, ${step.accentColor}10)`,
                      }}
                    />
                  )}

                  <div className={`flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Card — takes half width on desktop */}
                    <div className={`flex-1 md:w-[calc(50%-40px)] ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                      <div
                        className="relative rounded-2xl p-6 md:p-8 group transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        style={{
                          background: `${step.accentColor}08`,
                          border: `1px solid ${step.accentColor}20`,
                        }}
                      >
                        {/* Large number watermark */}
                        <span
                          className="absolute top-3 right-5 text-7xl md:text-8xl font-black select-none pointer-events-none"
                          style={{
                            color: "transparent",
                            WebkitTextStroke: `1.5px ${step.accentColor}15`,
                          }}
                        >
                          {step.number}
                        </span>

                        <div className="relative z-10">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: step.gradient,
                              boxShadow: `0 4px 16px ${step.accentColor}30`,
                            }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/45 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot — desktop only */}
                    <div className="hidden md:flex items-start justify-center pt-8" style={{ width: "80px" }}>
                      <div
                        className="w-5 h-5 rounded-full border-[3px] flex-shrink-0"
                        style={{
                          borderColor: step.accentColor,
                          background: "#0f0c29",
                          boxShadow: `0 0 16px ${step.accentColor}40`,
                        }}
                      />
                    </div>

                    {/* Mobile dot */}
                    <div className="md:hidden flex-shrink-0 mt-2">
                      <div
                        className="w-4 h-4 rounded-full border-[3px] relative z-10"
                        style={{
                          borderColor: step.accentColor,
                          background: "#0f0c29",
                          boxShadow: `0 0 12px ${step.accentColor}40`,
                          marginLeft: "-2px",
                        }}
                      />
                    </div>

                    {/* Empty spacer for the other half — desktop only */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
