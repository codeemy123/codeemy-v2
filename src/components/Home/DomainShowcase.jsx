"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Monitor,
  Stethoscope,
  Palette,
  Wrench,
  Briefcase,
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  Figma,
  Shirt,
  PenTool,
  Ruler,
  Box,
  Printer,
  Users,
  Megaphone,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

/* ── Color palette ──────────────────────────────────── */
const COLORS = {
  indigo: "#3D0066",
  grape: "#8238B3",
  palePurple: "#EFD9F7",
  gold: "#D7AC28",
  darkGold: "#C78D17",
}

const DOMAINS = [
  {
    title: "Medical",
    subtitle: "Build your career in healthcare and clinical research",
    description: "Explore medical coding, healthcare RCM, Clinical SAS, clinical data management and pharmacovigilance through practical, structured programs.",
    icon: Stethoscope,
    image: "/images/medical/MEDRCM-016.png",
    skills: [
      { name: "Medical Coding & RCM", icon: Stethoscope },
      { name: "Clinical SAS Programming", icon: BarChart3 },
      { name: "Clinical Data Management & EDC", icon: Monitor },
      { name: "Pharmacovigilance & Drug Safety", icon: CheckCircle2 },
    ],
  },
  {
    title: "Technology",
    subtitle: "Build the future with code and intelligence",
    description:
      "From full-stack web development to AI/ML and mobile apps — master the tech skills that companies are hiring for right now.",
    icon: Monitor,
    image: "/Technology.png",
    skills: [
      { name: "Web Development", icon: Code2 },
      { name: "Mobile Apps", icon: Smartphone },
      { name: "AI & Machine Learning", icon: Brain },
    ],
  },
  {
    title: "Design",
    subtitle: "Create experiences that captivate and inspire",
    description:
      "Dive into UI/UX, fashion design, and graphic design. Learn the creative craft that shapes how the world looks and feels.",
    icon: Palette,
    image: "/Design.png",
    skills: [
      { name: "UI/UX Design", icon: Figma },
      { name: "Fashion Design", icon: Shirt },
      { name: "Graphic Design", icon: PenTool },
    ],
  },
  {
    title: "CAD & Engineering",
    subtitle: "Design structures, machines, and models",
    description:
      "Master AutoCAD, SolidWorks, and 3D modeling to bring physical products from concept to reality.",
    icon: Wrench,
    image: "/CAD.png",
    skills: [
      { name: "AutoCAD", icon: Ruler },
      { name: "SolidWorks", icon: Box },
      { name: "3D Modeling", icon: Printer },
    ],
  },
  {
    title: "Business",
    subtitle: "Lead teams, grow brands, drive results",
    description:
      "From HR management to digital marketing and finance — learn the business skills that power every organization.",
    icon: Briefcase,
    image: "/Business.png",
    skills: [
      { name: "HR Management", icon: Users },
      { name: "Digital Marketing", icon: Megaphone },
      { name: "Business Analytics", icon: BarChart3 },
    ],
  },
]

export default function DomainShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(1)

  const domain = DOMAINS[activeTab]
  const DomainIcon = domain.icon

  return (
    <section
      ref={ref}
      className="relative py-10 md:py-14 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${COLORS.palePurple} 0%, #FFFFFF 40%, #FFFFFF 60%, ${COLORS.palePurple} 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COLORS.palePurple} 0%, transparent 70%)`,
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(215,172,40,0.08) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              color: COLORS.grape,
              background: `${COLORS.palePurple}`,
              border: `1px solid ${COLORS.grape}30`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Explore Domains
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ color: COLORS.indigo }}
          >
            Learn Across{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${COLORS.grape}, ${COLORS.gold})`,
              }}
            >
              Multiple Domains
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: `${COLORS.indigo}99` }}
          >
            We're not just a coding platform. Choose the domain that excites you
            and start building your future today.
          </motion.p>
        </div>

        {/* ── Tab Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
        >
          {DOMAINS.map((d, i) => {
            const Icon = d.icon
            const isActive = i === activeTab
            return (
              <button
                key={d.title}
                onClick={() => setActiveTab(i)}
                className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  color: isActive ? "#FFFFFF" : COLORS.indigo,
                  background: isActive
                    ? `linear-gradient(135deg, ${COLORS.indigo}, ${COLORS.grape})`
                    : "rgba(255,255,255,0.7)",
                  border: `1px solid ${isActive ? COLORS.grape : `${COLORS.grape}25`}`,
                  boxShadow: isActive
                    ? `0 4px 20px ${COLORS.grape}40`
                    : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Icon className="w-4 h-4" />
                {d.title}
                {isActive && (
                  <motion.div
                    layoutId="domain-tab-glow"
                    className="absolute -bottom-px left-4 right-4 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.darkGold})` }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* ── Feature Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: `1px solid ${COLORS.grape}20`,
              boxShadow: `0 20px 60px ${COLORS.indigo}12, 0 0 0 1px ${COLORS.palePurple}`,
            }}
          >
            {/* Gold accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.darkGold}, ${COLORS.gold})` }}
            />

            <div className="grid md:grid-cols-2">
              {/* Left — Full-bleed Image */}
              <div className="relative h-36 sm:h-40 md:h-auto md:min-h-[200px]">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className={`absolute inset-0 w-full h-full object-cover ${domain.title === "Medical" ? "object-bottom" : ""}`}
                />
                {/* Domain badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.indigo}CC, ${COLORS.grape}CC)`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <DomainIcon className="w-3.5 h-3.5" />
                    {domain.title}
                  </div>
                </div>
              </div>

              {/* Right — Content */}
              <div className="p-4 md:p-6 flex flex-col justify-center">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: COLORS.indigo }}
                >
                  {domain.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: COLORS.grape }}
                >
                  {domain.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: `${COLORS.indigo}80` }}
                >
                  {domain.description}
                </p>

                {/* Skills */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {domain.skills.map((skill, i) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3.5 p-3 rounded-xl transition-all duration-300 group cursor-default"
                        style={{
                          background: COLORS.palePurple + "60",
                          border: `1px solid ${COLORS.grape}15`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.indigo}, ${COLORS.grape})`,
                          }}
                        >
                          <SkillIcon className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div
                            className="font-semibold text-sm"
                            style={{ color: COLORS.indigo }}
                          >
                            {skill.name}
                          </div>
                          <div
                            className="text-xs mt-0.5"
                            style={{ color: `${COLORS.indigo}60` }}
                          >
                            Industry-ready curriculum
                          </div>
                        </div>
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 transition-colors"
                          style={{ color: COLORS.gold }}
                        />
                      </motion.div>
                    )
                  })}
                </div>

                <button
                  onClick={() => navigate(domain.title === "Medical" ? "/courses?category=Medical" : "/courses")}
                  className="group self-start flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.darkGold})`,
                    boxShadow: `0 4px 20px ${COLORS.gold}40`,
                  }}
                >
                  Explore {domain.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
