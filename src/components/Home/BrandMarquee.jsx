"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, TrendingUp, Award, Sparkles } from "lucide-react"

/* ─── Brand logo paths (from public/logos/) ─── */
const ALL_LOGOS = [
  { src: "/logos/logo1.png", alt: "Partner Company" },
  { src: "/logos/logo2.png", alt: "Partner Company" },
  { src: "/logos/logo3.png", alt: "Partner Company" },
  { src: "/logos/logo4.png", alt: "Partner Company" },
  { src: "/logos/logo5.png", alt: "Partner Company" },
  { src: "/logos/logo6.png", alt: "Partner Company" },
  { src: "/logos/logo7.png", alt: "Partner Company" },
  { src: "/logos/logo8.png", alt: "Partner Company" },
  { src: "/logos/logo9.png", alt: "Partner Company" },
  { src: "/logos/logo10.png", alt: "Partner Company" },
  { src: "/logos/logo11.png", alt: "Partner Company" },
  { src: "/logos/logo12.png", alt: "Partner Company" },
  { src: "/logos/logo13.png", alt: "Partner Company" },
  { src: "/logos/logo14.png", alt: "Partner Company" },
  { src: "/logos/logo15.png", alt: "Partner Company" },
]

/* Split into 3 rows */
const ROW_1 = ALL_LOGOS.slice(0, 5)
const ROW_2 = ALL_LOGOS.slice(5, 10)
const ROW_3 = ALL_LOGOS.slice(10, 15)

const STATS = [
  { icon: Building2, value: "150+", label: "Hiring Partners", color: "#7c3aed", bg: "#ede9fe" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate", color: "#059669", bg: "#d1fae5" },
  { icon: Award, value: "₹6 LPA", label: "Avg Package", color: "#2563eb", bg: "#dbeafe" },
]

/* ─── Logo Card ─── */
function LogoCard({ logo }) {
  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-xl mx-1.5 sm:mx-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
      style={{
        width: "clamp(80px, 11vw, 120px)",
        height: "clamp(44px, 6vw, 56px)",
        background: "#ffffff",
        border: "1px solid rgba(226,232,240,0.8)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

/* ─── Marquee Row ─── */
function MarqueeRow({ logos, direction = "left" }) {
  const animationClass =
    direction === "left" ? "animate-brand-marquee" : "animate-brand-marquee-reverse"

  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="relative overflow-hidden py-1.5">
      {/* Left gradient mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #f4f6f9, #f4f6f900)" }}
      />
      {/* Right gradient mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f4f6f9, #f4f6f900)" }}
      />

      <div className={`flex items-center w-max ${animationClass}`}>
        {repeatedLogos.map((logo, i) => (
          <LogoCard key={`${logo.src}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  )
}

/* ─── Main Section ─── */
export default function BrandMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-14 sm:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)",
      }}
    >
      {/* ── Dot pattern background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative blurs */}
      <div
        className="absolute top-[-80px] left-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] right-1/4 w-[350px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              color: "#7c3aed",
              background: "#ede9fe",
              border: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Placement Partners
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3"
            style={{ color: "#0f172a" }}
          >
            Secure Placements with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #7c3aed, #2563eb)",
              }}
            >
              Top Brands
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#64748b" }}
          >
            Our students are placed at industry-leading companies across tech,
            finance, and consulting.
          </motion.p>
        </div>

        {/* ── Marquee Rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-3 sm:space-y-4"
        >
          <MarqueeRow logos={ROW_1} direction="right" />
          <MarqueeRow logos={ROW_2} direction="left" />
          <MarqueeRow logos={ROW_3} direction="right" />
        </motion.div>

        {/* ── Stat Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,0.8)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: stat.bg }}
                >
                  <Icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
                <div>
                  <div
                    className="font-bold text-base leading-tight"
                    style={{ color: "#0f172a" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
