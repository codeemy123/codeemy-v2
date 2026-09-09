import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronRight, Monitor, Smartphone, Briefcase, Palette, Wrench, Stethoscope, Clock, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { courses } from "../../data/CourseData"

const CATEGORIES = ["Tech & Data", "Mobile Dev", "Business", "Design", "Engineering", "Medical"]

const CATEGORY_ICONS = {
  "Design": Palette,
  "Tech & Data": Monitor,
  "Mobile Dev": Smartphone,
  "Business": Briefcase,
  "Engineering": Wrench,
  "Medical": Stethoscope
}

const CrossLinesBg = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Large Logo Watermark */}
    <div className="absolute top-[40%] right-[-10%] w-[900px] h-[900px] opacity-[0.02] mix-blend-plus-lighter transform -translate-y-1/2 rotate-[-10deg]">
      <img src="/logo.png" alt="" className="w-full h-full object-contain" />
    </div>

    {/* Big Background Squares */}
    <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] border-[50px] border-white/[0.015] rounded-[4rem] transform rotate-[25deg]" />
    <div className="absolute bottom-[-10%] right-[15%] w-[600px] h-[600px] border-[80px] border-indigo-200/[0.01] rounded-[6rem] transform -rotate-[15deg]" />

    {/* Diagonal Band 1 */}
    <div className="absolute top-[0%] left-[-20%] w-[150%] h-[300px] bg-white/[0.015] transform -rotate-[12deg]" />
    {/* Diagonal Band 2 */}
    <div className="absolute top-[50%] right-[-20%] w-[150%] h-[400px] bg-white/[0.02] transform rotate-[18deg]" />
    {/* Diagonal Band 3 */}
    <div className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[200px] bg-white/[0.015] transform -rotate-[25deg]" />

    {/* Underlying ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/15 rounded-full blur-[150px]" />
  </div>
)

export default function PopularCourses() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])
  const navigate = useNavigate()

  // Get courses for active category
  const displayCourses = courses
    .filter(c => c.category === activeCategory)
    .slice(0, 6)

  return (
    <section className="pt-10 pb-24 md:pt-16 md:pb-32 bg-[#2B2A3E] relative overflow-hidden">
      <CrossLinesBg />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14 md:mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-white mb-4 tracking-tight leading-tight">
            Explore Popular Courses
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Choose your path and start learning with structured courses designed to help you master real-world skills.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT SIDE: Category Selector (Vertical Menu) */}
          <div className="lg:w-[300px] shrink-0">
            <h3 className="text-[13px] font-bold text-white/90 mb-4 px-1">
              Select Type
            </h3>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category
                const IconClass = CATEGORY_ICONS[category] || Monitor

                return (
                  <button
                    key={category}
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`group flex items-center justify-between p-2 pr-4 rounded-xl transition-all duration-300 text-left w-full
                      ${isActive
                        ? "bg-white shadow-[0_4px_20px_rgba(255,255,255,0.1)] scale-[1.02]"
                        : "bg-[#F3F4F6] hover:bg-white"}`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon Box */}
                      <div className={`w-[42px] h-[42px] rounded-lg flex items-center justify-center transition-colors 
                        ${isActive ? "bg-indigo-50 text-indigo-700" : "bg-white text-slate-500 shadow-sm group-hover:bg-slate-50"}`}>
                        <IconClass className={`w-5 h-5 ${isActive ? "text-indigo-700" : "text-slate-500"}`} />
                      </div>

                      {/* Text Box */}
                      <div>
                        <p className={`text-[15px] font-bold transition-colors ${isActive ? "text-indigo-700" : "text-slate-800"}`}>
                          {category}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className={`w-[18px] h-[18px] transition-colors ${isActive ? "text-indigo-700" : "text-slate-400 group-hover:text-slate-800"}`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Courses Grid */}
          <div className="lg:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16"
              >
                {displayCourses.length === 0 && (
                  <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white" role="status">
                    <Stethoscope className="mx-auto mb-4 h-10 w-10 text-indigo-300" />
                    <h4 className="text-xl font-bold mb-2">Medical Courses</h4>
                    <p className="text-white/70">No courses are listed in this category yet.</p>
                  </div>
                )}
                {displayCourses.map((course, idx) => (
                  <div
                    key={course.id}
                    onClick={() => navigate(`/course/${course.id}`)}
                    className="relative group w-full cursor-pointer flex flex-col pt-2"
                  >
                    {/* Glowing shadow behind the white card to make it pop against dark bg */}
                    <div className="absolute bottom-4 right-0 w-[88%] h-[50%] bg-indigo-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* 16:9 Course Image (Top Left Bias) */}
                    <div className="w-[92%] aspect-video rounded-3xl overflow-hidden shadow-lg z-0 bg-slate-800 self-start relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className={`w-full h-full object-cover ${course.category === "Medical" ? "object-bottom" : ""} transition-transform duration-700 ease-in-out group-hover:scale-110`}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-[#2B2A3E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* About Card (Bottom Right Bias) */}
                    <div className="w-[88%] self-end -mt-16 mr-2 md:mr-6 bg-white rounded-[1.5rem] p-6 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] border border-white/20 z-10 transition-transform duration-400 ease-out group-hover:-translate-y-3 flex flex-col justify-between min-h-[180px]">

                      <div>
                        {/* Sub-label */}
                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-2 block">
                          {course.category}
                        </span>

                        <h4 className="font-extrabold text-slate-900 text-[18px] md:text-[20px] leading-tight mb-2 line-clamp-2 tracking-tight">
                          {course.title}
                        </h4>

                        <p className="text-[13px] text-slate-500 line-clamp-2 leading-snug mb-4 pr-1">
                          {course.description}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                        {/* Stats Row */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 rounded-lg text-[11px] md:text-[12px] font-bold text-slate-600">
                            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" />
                            {course.duration || "2 Months"}
                          </div>
                          <div aria-label={`${course.students} students`} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 rounded-lg text-[11px] md:text-[12px] font-bold text-slate-600">
                            <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-400" />
                            {course.students}
                          </div>
                        </div>

                        {/* Action Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-11 h-11 rounded-full bg-slate-50 text-slate-600 flex shrink-0 items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-transparent"
                        >
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </motion.button>
                      </div>

                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
