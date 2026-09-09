"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote, Users, TrendingUp, Award, BookOpen } from "lucide-react"

import ranjith from "../../assets/Ranjith.jpeg"
import surya from "../../assets/Surya.jpeg"
import jenifer from "../../assets/jenifer.jpeg"

// Palette provided by user:
// #efbbff (Lightest)
// #d896ff (Light)
// #be29ec (Mid)
// #800080 (Dark)
// #660066 (Darkest)

const STATS = [
  { value: 2000, suffix: "+", label: "Students Enrolled", color: "#be29ec" },
  { value: 95, suffix: "%", label: "Placement Rate", color: "#d896ff" },
  { value: 4.8, suffix: "★", label: "Avg. Rating", color: "#800080" },
  { value: 15, suffix: "+", label: "Courses Offered", color: "#660066" },
]

const TESTIMONIALS = [
  {
    name: "Ranjith",
    role: "AI Engineer at TechNow",
    content:
      "The AI and machine learning courses here are world-class. I transitioned from a non-tech background and landed a senior role in under 6 months.",
    avatar: ranjith,
    rating: 5,
    accentColor: "#be29ec",
  },
  {
    name: "Jenifer",
    role: "Senior Developer at Meta",
    content:
      "From zero to full-stack developer in 8 months. The mentorship and project-based learning approach is truly unmatched.",
    avatar: jenifer,
    rating: 5,
    accentColor: "#800080",
  },
  {
    name: "Surya",
    role: "Product Designer at Figma",
    content:
      "The UX/UI design program gave me the confidence and practical skills to land my dream job. Incredible experience overall!",
    avatar: surya,
    rating: 5,
    accentColor: "#be29ec",
  },
]

function AnimatedCounter({ target, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const isDecimal = !Number.isInteger(target)
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-white z-0"
    >
      {/* Decorative Background Elements using the lightest palette colors */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#efbbff] rounded-full blur-[140px] opacity-40 z-0 pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-[#d896ff] rounded-full blur-[140px] opacity-30 z-0 pointer-events-none" />

      {/* Floating Small Rhombuses */}
      <div className="absolute top-[15%] left-[8%] w-8 h-8 rounded-md border-[3px] border-[#d896ff]/60 transform rotate-45 z-0" />
      <div className="absolute top-[25%] right-[18%] w-12 h-12 rounded-lg border-[3px] border-[#be29ec]/40 transform rotate-45 z-0" />
      <div className="absolute bottom-[15%] left-[22%] w-6 h-6 rounded border-[2px] border-[#800080]/30 transform rotate-45 z-0" />
      <div className="absolute bottom-[25%] right-[12%] w-10 h-10 rounded-md border-[3px] border-[#efbbff]/90 transform rotate-45 z-0" />
      <div className="absolute top-[50%] left-[8%] w-4 h-4 rounded-sm bg-[#d896ff]/60 transform rotate-45 z-0" />
      <div className="absolute top-[70%] right-[30%] w-5 h-5 rounded-sm bg-[#efbbff]/80 transform rotate-45 z-0" />

      {/* Large decorative quote mark */}
      <div className="absolute top-16 right-24 pointer-events-none select-none hidden lg:block z-0">
        <Quote
          className="w-72 h-72 text-[#efbbff]"
          style={{ opacity: 0.4 }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[13px] font-extrabold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#800080" }}
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Trusted by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #be29ec, #800080)",
              }}
            >
              Thousands
            </span>
          </motion.h2>
        </div>

        {/* Stats — Hero numbers with animated count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-32"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group flex flex-col items-center">
              <div
                className="text-5xl md:text-6xl font-extrabold mb-4 transition-transform duration-300 group-hover:scale-105"
                style={{ color: "#660066" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div
                className="h-[4px] w-12 rounded-full mb-5 transition-all duration-300 group-hover:w-24 opacity-80"
                style={{ background: stat.color }}
              />
              <div className="text-slate-600 text-[13px] font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials — staggered card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="relative group h-full"
            >
              <div
                className="rounded-[2rem] p-8 h-full transition-all duration-400 group-hover:-translate-y-2 overflow-hidden bg-white relative z-10 flex flex-col"
                style={{
                  boxShadow: `0 12px 40px -10px ${testimonial.accentColor}1A`,
                  border: `1px solid ${testimonial.accentColor}20`,
                }}
              >
                {/* Top right decorative quote inside card */}
                <Quote 
                  className="absolute top-6 right-6 w-12 h-12 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                  style={{ color: testimonial.accentColor }} 
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, si) => (
                      <Star
                        key={si}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[15px] text-slate-600 leading-relaxed mb-8 italic font-medium flex-1">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 object-cover shadow-sm"
                      style={{ borderColor: `${testimonial.accentColor}60` }}
                    />
                    <div>
                      <div className="text-slate-900 font-extrabold text-[16px]">
                        {testimonial.name}
                      </div>
                      <div className="text-[13px] font-bold mt-0.5" style={{ color: testimonial.accentColor }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soft underlying shadow aura to make cards pop beautifully */}
              <div 
                className="absolute inset-0 rounded-[2rem] -z-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                style={{ background: `${testimonial.accentColor}20` }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
