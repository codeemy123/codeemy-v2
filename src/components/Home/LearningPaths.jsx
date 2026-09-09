"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  Code2,
  Stethoscope,
  PenTool,
  Cog,
  Megaphone,
  Clock,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react"

const PATHS = [
  {
    title: "Medical Path",
    subtitle: "Medical Coding & RCM, Clinical SAS, Clinical Data Management, Drug Safety",
    icon: Stethoscope,
    duration: "3 Months",
    skills: ["Medical Coding", "Healthcare RCM", "Clinical SAS", "EDC", "Pharmacovigilance"],
    theme: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    milestones: ["Foundations", "Specialist Skills", "Case Studies", "Capstone", "Interview Preparation"],
  },
  {
    title: "Developer Path",
    subtitle: "Full-Stack, Frontend, Backend, AI/ML",
    icon: Code2,
    duration: "4–6 Months",
    skills: ["React", "Node.js", "Python", "SQL", "Git"],
    theme: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    milestones: ["Fundamentals", "Core Skills", "Projects", "Portfolio", "Placement"],
  },
  {
    title: "Designer Path",
    subtitle: "UI/UX, Fashion, Graphic Design",
    icon: PenTool,
    duration: "3–5 Months",
    skills: ["Figma", "Adobe XD", "Typography", "Prototyping"],
    theme: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" },
    milestones: ["Design Theory", "Tools Mastery", "Portfolio", "Industry Project", "Placement"],
  },
  {
    title: "CAD Engineer Path",
    subtitle: "AutoCAD, SolidWorks, 3D Modeling",
    icon: Cog,
    duration: "3–5 Months",
    skills: ["AutoCAD", "SolidWorks", "3D Print", "Revit"],
    theme: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
    milestones: ["2D Drafting", "3D Modeling", "Simulation", "Capstone", "Placement"],
  },
  {
    title: "Marketing & HR Path",
    subtitle: "Digital Marketing, HR, Business Analytics",
    icon: Megaphone,
    duration: "2–4 Months",
    skills: ["SEO", "Google Ads", "HR Mgmt", "Analytics"],
    theme: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    milestones: ["Foundations", "Strategy", "Campaigns", "Analytics", "Placement"],
  },
]

// Skill tag coloring logic to recreate the user's reference image style
const getSkillTheme = (skill) => {
  const mapping = {
    "React": "bg-blue-50 text-blue-600",
    "Node.js": "bg-green-50 text-green-700",
    "Python": "bg-yellow-50 text-yellow-700",
    "SQL": "bg-indigo-50 text-indigo-600",
    "Git": "bg-slate-100 text-slate-700",
    "Figma": "bg-pink-50 text-pink-600",
    "Adobe XD": "bg-purple-50 text-purple-600",
    "Typography": "bg-orange-50 text-orange-600",
    "Prototyping": "bg-cyan-50 text-cyan-700",
    "AutoCAD": "bg-rose-50 text-rose-600",
    "SolidWorks": "bg-red-50 text-red-600",
    "3D Print": "bg-fuchsia-50 text-fuchsia-600",
    "Revit": "bg-violet-50 text-violet-600",
    "SEO": "bg-sky-50 text-sky-600",
    "Google Ads": "bg-blue-50 text-blue-600",
    "HR Mgmt": "bg-teal-50 text-teal-700",
    "Analytics": "bg-amber-50 text-amber-700",
  }
  return mapping[skill] || "bg-slate-50 text-slate-600"
}

// Background patterned SVG inspired by the "small squares" reference
const ScatteredSquaresBg = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] z-0 text-slate-900" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="scattered-squares" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
        <rect x="20" y="20" width="24" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="120" y="40" width="30" height="30" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="50" y="110" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="150" y="140" width="28" height="28" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="80" y="170" width="24" height="24" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="180" y="80" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="-10" y="80" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#scattered-squares)" />
  </svg>
)

export default function LearningPaths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const navigate = useNavigate()
  const [selectedPath, setSelectedPath] = useState(1)

  const path = PATHS[selectedPath]
  const PathIcon = path.icon

  return (
    <section ref={ref} className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-[#FAFBFF]">
      {/* Scattered Square Background Pattern */}
      <ScatteredSquaresBg />

      {/* Gentle underlying glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-100/40 blur-[120px] pointer-events-none -z-10 opacity-60" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ── Hero Text ── */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4 bg-indigo-50 px-3 py-1.5 rounded-full"
          >
            <TrendingUp className="w-3.5 h-3.5" /> Career Tracks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[3.25rem] font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Choose Your <span className="text-indigo-600 bg-indigo-50/50 px-2 rounded-lg">Learning Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Follow a structured career timeline instead of random courses. Every
            path is carefully designed to lead directly to real-world job readiness.
          </motion.p>
        </div>

        {/* ── Path Selector (Pills) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide mb-12 pb-4 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {PATHS.map((p, i) => {
            const isActive = selectedPath === i
            const Icon = p.icon
            return (
              <button
                key={i}
                onClick={() => setSelectedPath(i)}
                className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-full transition-all duration-300 font-semibold text-sm whitespace-nowrap border shrink-0
                  ${isActive 
                    ? "bg-indigo-600 text-white shadow-[0_8px_20px_rgba(99,102,241,0.3)] border-transparent scale-[1.02]" 
                    : "bg-white text-slate-600 shadow-sm border-slate-200 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"}`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`} />
                {p.title.replace(" Path", "")}
              </button>
            )
          })}
        </motion.div>

        {/* ── Main Path Card Container ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative z-10 w-full"
          >
            {/* Top Area: Details & Metrics */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
              
              {/* Left: Icon & Title */}
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-[1.125rem] flex items-center justify-center border shrink-0 ${path.theme.bg} ${path.theme.border}`}>
                  <PathIcon className={`w-6 h-6 ${path.theme.text}`} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">{path.title}</h3>
                  <p className="text-slate-500 font-medium text-sm sm:text-base">{path.subtitle}</p>
                </div>
              </div>
              
              {/* Right: Info Metrics */}
              <div className="flex items-center divide-x divide-slate-200 bg-slate-50 rounded-2xl border border-slate-100 self-start shrink-0">
                <div className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {path.duration}
                </div>
                <div className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-slate-600">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  {path.skills.length} Core Skills
                </div>
              </div>
            </div>

            {/* Middle Area: The Timeline Journey */}
            <div className="relative mb-10 px-2 sm:px-6">
              {/* Background Line */}
              <div className="absolute top-4 left-6 right-6 h-[2px] bg-slate-100 rounded-full" />
              
              {/* Active Progress Line */}
              <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                 className="absolute top-4 left-6 h-[2px] bg-indigo-500 rounded-full origin-left" 
              />

              <div className="relative flex justify-between items-start gap-2">
                 {path.milestones.map((m, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 relative z-10 group flex-1">
                       {/* Numbered Indicator */}
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                         className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[11px] font-bold shadow-sm ring-4 ring-white transition-colors duration-300
                            ${i === 0 
                              ? "bg-indigo-500 border-indigo-500 text-white" 
                              : "bg-white border-indigo-300 text-indigo-500 group-hover:border-indigo-500"}`}
                       >
                         {i + 1}
                       </motion.div>
                       {/* Step Label */}
                       <motion.span 
                         initial={{ opacity: 0, y: 5 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3 + i * 0.1 }}
                         className={`text-xs sm:text-sm font-semibold text-center leading-tight transition-colors duration-300
                           ${i === 0 ? "text-indigo-900" : "text-slate-500 group-hover:text-slate-800"}`}
                       >
                         {m}
                       </motion.span>
                    </div>
                 ))}
              </div>
            </div>

            {/* Bottom Area: Soft Skills Tags & CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-slate-100">
               
               {/* Skills Tag List */}
               <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 md:pb-0 w-full md:w-auto flex-nowrap" style={{ WebkitOverflowScrolling: "touch" }}>
                  {path.skills.map((skill, index) => {
                     const theme = getSkillTheme(skill)
                     return (
                       <motion.span 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          key={skill} 
                          className={`px-4 py-2 rounded-[0.6rem] text-sm font-bold tracking-wide whitespace-nowrap shrink-0 ${theme}`}
                       >
                          {skill}
                       </motion.span>
                     )
                  })}
               </div>

               {/* CTA Button */}
               <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => navigate(path.title === "Medical Path" ? "/courses?category=Medical" : "/courses")}
                  className="bg-slate-900 text-white px-8 py-3.5 md:py-4 rounded-[1.125rem] font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 shrink-0 group w-full md:w-auto"
               >
                  Start This Path
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </motion.button>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
