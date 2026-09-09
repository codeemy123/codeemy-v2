"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const SHAPES = [
  { type: "circle", size: 60, top: "10%", left: "8%", delay: 0, color: "rgba(14, 165, 233, 0.3)" }, // sky
  { type: "triangle", size: 44, top: "20%", right: "12%", delay: 0.5, color: "rgba(249, 115, 22, 0.25)" }, // orange
  { type: "hexagon", size: 50, bottom: "15%", left: "15%", delay: 1, color: "rgba(14, 165, 233, 0.25)" },
  { type: "circle", size: 36, top: "60%", right: "8%", delay: 1.5, color: "rgba(249, 115, 22, 0.35)" },
  { type: "square", size: 30, top: "40%", left: "5%", delay: 2, color: "rgba(14, 165, 233, 0.2)" },
  { type: "triangle", size: 28, bottom: "30%", right: "20%", delay: 0.8, color: "rgba(249, 115, 22, 0.2)" },
]

function GeometricShape({ shape }) {
  const style = {
    position: "absolute",
    width: shape.size,
    height: shape.size,
    top: shape.top,
    bottom: shape.bottom,
    left: shape.left,
    right: shape.right,
  }

  if (shape.type === "circle") {
    return (
      <motion.div
        style={{ ...style, borderRadius: "50%", border: `2.5px solid ${shape.color}`, background: `transparent` }}
        animate={{ y: [-15, 15, -15], rotate: [0, 90, 180] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
      />
    )
  }

  if (shape.type === "triangle") {
    return (
      <motion.div
        style={{
          ...style,
          width: 0,
          height: 0,
          borderLeft: `${shape.size / 2}px solid transparent`,
          borderRight: `${shape.size / 2}px solid transparent`,
          borderBottom: `${shape.size}px solid ${shape.color}`,
        }}
        animate={{ y: [-10, 20, -10], rotate: [-10, 15, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
      />
    )
  }

  if (shape.type === "hexagon") {
    return (
      <motion.div
        style={{
          ...style,
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: "transparent",
          border: `2.5px solid ${shape.color}`,
        }}
        animate={{ y: [-12, 8, -12], rotate: [0, 60, -20] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
      />
    )
  }

  // square
  return (
    <motion.div
      style={{
        ...style,
        borderRadius: "6px",
        border: `3px solid ${shape.color}`,
        background: "transparent",
      }}
      animate={{ y: [-8, 12, -8], rotate: [0, -45, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
    />
  )
}

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const navigate = useNavigate()

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Light Theme Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white to-orange-50/40" />
          
          {/* Subtle Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(#0f172a 1px, transparent 1px),
                linear-gradient(90deg, #0f172a 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Floating geometric shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {SHAPES.map((shape, i) => (
              <GeometricShape key={i} shape={shape} />
            ))}
          </div>

          {/* Glow spots */}
          <div
            className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Border overlay */}
          <div className="absolute inset-0 border border-slate-200/60 rounded-[2.5rem] pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,1)]" />

          {/* Content — asymmetric split */}
          <div className="relative z-10 py-16 px-8 md:py-20 md:px-16">
            <div className="grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
              {/* Left — 3 cols */}
              <div className="md:col-span-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 shadow-sm border border-sky-100"
                  style={{
                    background: "rgba(14, 165, 233, 0.08)",
                    color: "#0284c7", // sky-600
                  }}
                >
                  <Rocket className="w-4 h-4 text-orange-500" />
                  Start Today, Transform Tomorrow
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight"
                >
                  Your Career
                  <br />
                  Transformation
                  <br />
                  <span className="text-orange-500">Starts Right Here</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-slate-600 font-medium text-base md:text-lg max-w-lg leading-relaxed"
                >
                  Join thousands of learners who chose a guided path to career success.
                  No matter your domain — we've got you covered.
                </motion.p>
              </div>

              {/* Right — 2 cols — stacked CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="md:col-span-2 flex flex-col gap-4"
              >
                <button
                  onClick={() => navigate("/courses")}
                  className="group relative px-10 py-5 rounded-3xl font-bold text-white text-[15px] bg-orange-500 overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(249,115,22,0.25)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.4)] hover:-translate-y-1 hover:bg-orange-600 outline-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase">
                    Start Learning Now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-10 py-5 rounded-3xl font-bold text-sky-700 text-[15px] transition-all duration-300 hover:bg-sky-50 hover:text-sky-800 text-center bg-white shadow-sm hover:shadow border border-slate-200 hover:border-sky-200 tracking-wide uppercase outline-none"
                >
                  Book Free Consultation
                </button>

                {/* Micro trust text */}
                <p className="text-slate-400 font-medium text-[12px] text-center mt-3 tracking-wide">
                  ✦ No credit card required · Free consultation available
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
