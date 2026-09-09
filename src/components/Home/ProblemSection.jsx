"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { HelpCircle, Compass, ShieldAlert, ChevronDown, AlertTriangle } from "lucide-react"

const PAIN_POINTS = [
  {
    icon: HelpCircle,
    number: "01",
    title: "Confused About Your Career Path?",
    description:
      "With hundreds of options, choosing the right career direction feels overwhelming. Most learners waste months exploring random courses with no clear outcome.",
    accent: "#7c3aed",
    lightAccent: "#ede9fe",
  },
  {
    icon: Compass,
    number: "02",
    title: "Learning Without Direction?",
    description:
      "Scattered YouTube tutorials and free resources lack structure. Without a clear roadmap, you spend more time searching than actually learning.",
    accent: "#f43f5e",
    lightAccent: "#ffe4e6",
  },
  {
    icon: ShieldAlert,
    number: "03",
    title: "Skills That Don't Match Industry Needs?",
    description:
      "Traditional education often falls behind. Employers need practical, up-to-date skills — not outdated theory from years-old textbooks.",
    accent: "#f59e0b",
    lightAccent: "#fef3c7",
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)",
      }}
    >
      {/* ── Subtle chunked grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px),
            linear-gradient(180deg, rgba(148,163,184,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px),
            linear-gradient(180deg, rgba(148,163,184,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Decorative blurs */}
      <div
        className="absolute top-[-100px] right-[-50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-80px] left-[-50px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244,63,94,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="mb-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              color: "#f43f5e",
              background: "#fff1f2",
              border: "1px solid rgba(244,63,94,0.15)",
            }}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            The Problem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#0f172a" }}
          >
            Sound{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #7c3aed, #f43f5e)",
              }}
            >
              Familiar?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#64748b" }}
          >
            These are the real challenges learners face every day — and we built
            our platform to solve them.
          </motion.p>
        </div>

        {/* ── Accordion Items ── */}
        <div className="space-y-3">
          {PAIN_POINTS.map((point, i) => {
            const Icon = point.icon
            const isExpanded = expandedIndex === i

            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                  className="w-full text-left group"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      background: isExpanded ? "#ffffff" : "rgba(255,255,255,0.7)",
                      border: `1px solid ${isExpanded ? `${point.accent}30` : "rgba(226,232,240,0.8)"}`,
                      boxShadow: isExpanded
                        ? `0 8px 30px ${point.accent}12, 0 1px 3px rgba(0,0,0,0.06)`
                        : "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Active accent bar */}
                    {isExpanded && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                        style={{ background: point.accent }}
                      />
                    )}

                    {/* Accordion header */}
                    <div className="flex items-center gap-4 sm:gap-5 p-5 md:p-6">
                      {/* Large number watermark */}
                      <span
                        className="text-4xl md:text-5xl font-black select-none hidden sm:block"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: `1.5px ${isExpanded ? `${point.accent}35` : "rgba(203,213,225,0.6)"}`,
                        }}
                      >
                        {point.number}
                      </span>

                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: isExpanded ? point.accent : point.lightAccent,
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: isExpanded ? "#ffffff" : point.accent }}
                        />
                      </div>

                      <h3
                        className="flex-1 text-base md:text-lg font-bold transition-colors"
                        style={{ color: "#0f172a" }}
                      >
                        {point.title}
                      </h3>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className="w-5 h-5"
                          style={{ color: isExpanded ? point.accent : "#94a3b8" }}
                        />
                      </motion.div>
                    </div>

                    {/* Accordion content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 sm:pl-[108px]">
                            <p
                              className="text-sm md:text-base leading-relaxed"
                              style={{ color: "#64748b" }}
                            >
                              {point.description}
                            </p>
                            <div
                              className="mt-3 h-[2px] w-16 rounded-full"
                              style={{ background: `linear-gradient(90deg, ${point.accent}, ${point.accent}60)` }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
