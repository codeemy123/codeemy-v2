"use client"

import { useState, useEffect } from "react"
import { courses } from "../data/CourseData";
import { useNavigate, useSearchParams } from "react-router-dom"
import {
  Star,
  Users,
  Clock,
  BookOpen,
  Award,
  Search,
  ChevronDown,
  Play,
  Download,
  Globe,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Monitor,
  Cpu,
  Briefcase,
  Palette,
  Wrench,
  Smartphone,
  Stethoscope,
  LayoutGrid,
  X,
} from "lucide-react"

const CATEGORY_META = [
  { name: "All", icon: LayoutGrid, color: "from-violet-500 to-purple-600" },
  { name: "Tech & Data", icon: Monitor, color: "from-blue-500 to-indigo-600" },
  { name: "Mobile Dev", icon: Smartphone, color: "from-green-500 to-teal-600" },
  { name: "Business", icon: Briefcase, color: "from-amber-500 to-orange-600" },
  { name: "Design", icon: Palette, color: "from-pink-500 to-rose-600" },
  { name: "Engineering", icon: Wrench, color: "from-cyan-500 to-blue-600" },
  { name: "Medical", icon: Stethoscope, color: "from-emerald-500 to-teal-600" },
]

function getCategoryCount(name) {
  if (name === "All") return courses.length
  return courses.filter(c => c.category === name).length
}

export function CoursesPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const category = searchParams.get("category")
    return CATEGORY_META.some(item => item.name === category) ? category : "All"
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popularity")
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => { setIsVisible(true) }, [])

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const q = searchTerm.toLowerCase()
    const matchesSearch =
      course.title.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0)
    return 0
  })

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg,#0f0c29 0%,#302b63 50%,#24243e 100%)" }}>

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-24 pb-14 px-6" style={{ background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%,white 1px,transparent 1px),radial-gradient(circle at 80% 50%,white 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            {courses.length} Industry-Ready Courses
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Explore Our <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)", color: "transparent" }}>Courses</span>
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            World-class courses taught by industry experts. Master skills that matter in today's job market.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/90">
            {[["2000+", "Students"], [String(courses.length), "Courses"], ["Industry", "Certified"], ["Live", "Mentorship"]].map(([val, label]) => (
              <div key={label} className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
                <span className="text-xl font-bold">{val}</span>
                <span className="opacity-80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1450px] mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* ── Left Sidebar ──────────────────────────────────────────────────── */}
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open course categories"
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-2xl"
        >
          <LayoutGrid className="w-5 h-5" />
        </button>

        {/* Sidebar overlay on mobile */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
            <div className="relative z-10 w-72 bg-gray-900 h-full overflow-y-auto p-6">
              <button aria-label="Close course categories" onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
              <SidebarContent
                categories={CATEGORY_META}
                selectedCategory={selectedCategory}
                onSelect={(name) => { setSelectedCategory(name); setSidebarOpen(false) }}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                getCategoryCount={getCategoryCount}
              />
            </div>
          </div>
        )}

        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-6 rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <SidebarContent
              categories={CATEGORY_META}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
              getCategoryCount={getCategoryCount}
            />
          </div>
        </aside>

        {/* ── Course Grid ──────────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-white/70 text-sm">
              Showing <span className="text-white font-semibold">{sortedCourses.length}</span> courses
              {selectedCategory !== "All" && <span> in <span className="text-purple-300 font-semibold">{selectedCategory}</span></span>}
            </p>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-sm px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}
            >
              <option value="popularity" style={{ background: "#302b63" }}>Sort: Popularity</option>
              <option value="rating" style={{ background: "#302b63" }}>Sort: Top Rated</option>
            </select>
          </div>

          {sortedCourses.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <Search className="w-10 h-10 text-white/30" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
              <p className="text-white/50 mb-6">Try a different category or search term</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All") }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

              {sortedCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} navigate={navigate} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Sidebar Content (shared between desktop and mobile)
───────────────────────────────────────────────────────────────────────────── */
function SidebarContent({ categories, selectedCategory, onSelect, searchTerm, onSearch, getCategoryCount }) {
  return (
    <div className="p-5">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={e => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white/10 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
        />
      </div>

      {/* Section label */}
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
        Select Type
      </p>

      {/* Category list */}
      <div className="space-y-2">
        {categories.map(cat => {
          const Icon = cat.icon
          const isActive = selectedCategory === cat.name
          const count = getCategoryCount(cat.name)
          return (
            <button
              key={cat.name}
              onClick={() => onSelect(cat.name)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group"
              style={{
                background: isActive
                  ? "linear-gradient(135deg,rgba(139,92,246,0.4),rgba(99,102,241,0.4))"
                  : "rgba(255,255,255,0.04)",
                border: isActive ? "1px solid rgba(139,92,246,0.5)" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: isActive ? "0 0 20px rgba(139,92,246,0.15)" : "none",
              }}
            >
              {/* Icon pill */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? `bg-gradient-to-br ${cat.color}` : "bg-white/10 group-hover:bg-white/15"}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              {/* Label + count */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                  {cat.name}
                </p>
                <p className="text-xs text-white/40">{count} course{count !== 1 ? "s" : ""}</p>
              </div>
              {/* Arrow */}
              <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isActive ? "text-purple-300 translate-x-0.5" : "text-white/25 group-hover:text-white/50"}`} />
            </button>
          )
        })}
      </div>

      {/* Quick stats */}
      <div className="mt-8 p-4 rounded-xl" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
        <p className="text-xs font-semibold text-purple-300 mb-3 uppercase tracking-wider">Quick Stats</p>
        <div className="space-y-2">
          {(selectedCategory === "Medical"
            ? [["4", "Programs"], ["3 Months", "Duration"], ["Online", "Mode"]]
            : [["2000+", "Students Enrolled"], ["4.8★", "Avg Rating"], ["120hrs", "Per Course"]]).map(([v, l]) => (
            <div key={l} className="flex justify-between text-xs">
              <span className="text-white/50">{l}</span>
              <span className="text-white font-semibold">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Course Card
───────────────────────────────────────────────────────────────────────────── */
function CourseCard({ course, index, navigate }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/course/${course.id}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: hovered ? "1px solid rgba(139,92,246,0.5)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? "0 20px 60px rgba(139,92,246,0.25)" : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className={`w-full h-full object-cover ${course.category === "Medical" ? "object-bottom" : ""} transition-transform duration-700 group-hover:scale-110`}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 50%)" }} />

        {/* Bestseller badge */}
        {course.bestseller && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white flex items-center gap-1"
              style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}>
              ⭐ Bestseller
            </span>
          </div>
        )}


        {/* Play overlay on hover */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.4)" }}>
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-bold text-white text-base mb-2 line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm line-clamp-2 mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-4 text-xs text-white/60">
          {course.rating != null && <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-white font-semibold">{course.rating}</span>
          </span>}
          {course.rating != null && <span className="w-1 h-1 rounded-full bg-white/20" />}
          <span className="flex items-center gap-1" aria-label={`${course.students} students`}>
            <Users className="w-3.5 h-3.5" />
            {course.students}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
        </div>

        {/* Separator */}
        <div className="mb-4" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Action row */}
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); navigate(`/course/${course.id}`) }}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
          >
            Know More <ArrowRight className="w-4 h-4" />
          </button>
          {course.pdf && (
            <a
              href={course.pdf}
              aria-label={`Download ${course.title} syllabus`}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              <button className="px-3 py-2.5 rounded-xl text-white/60 hover:text-white transition-colors duration-300 hover:bg-white/10">
                <Download className="w-4 h-4" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoursesPage
