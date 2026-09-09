import { Link } from "react-router-dom"
import { ArrowLeft, ArrowRight, Download, Clock, Globe, GraduationCap, CheckCircle, ChevronDown, BookOpen } from "lucide-react"

export default function MedicalCourseDetails({ course, journey, children }) {
  return (
    <div className="min-h-screen overflow-x-clip text-white" style={{ background: "linear-gradient(135deg,#0f0c29 0%,#1a1040 40%,#0d1b2a 100%)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <Link to="/courses" className="inline-flex items-center gap-2 text-purple-300 mb-8 hover:text-white"><ArrowLeft className="w-4 h-4" /> All Courses</Link>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest bg-teal-500/15 text-teal-300 border border-teal-400/30 mb-5">Medical · Healthcare Programs</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">{course.title}</h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-7">{course.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-200 mb-8">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-300" />{course.duration}</span>
              <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-teal-300" />{course.mode}</span>
              <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-teal-300" />{course.level}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#medical-enquiry" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-bold hover:brightness-110">Enquire Now <ArrowRight className="w-4 h-4" /></a>
              <a href={course.pdf} download className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold hover:bg-white/10"><Download className="w-4 h-4" /> Download Syllabus</a>
            </div>
          </div>
          <img src={course.image} alt={`${course.title} brochure cover`} className="w-full max-w-sm mx-auto rounded-3xl border border-white/15 shadow-2xl" />
        </div>
      </div>

      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10"><BookOpen className="w-9 h-9 text-purple-400 mx-auto mb-4" /><h2 className="text-3xl sm:text-4xl font-bold mb-3">What You Will Learn</h2><p className="text-slate-400">12 weeks of structured learning with practical projects.</p></div>
          <div className="space-y-3">
            {course.syllabus.map(module => (
              <details key={module.id} className="group rounded-2xl bg-white/5 border border-white/10 open:border-purple-400/50">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <div><p className="text-xs text-teal-300 uppercase tracking-wider mb-1">Week {module.id}</p><h3 className="font-semibold">{module.title}</h3></div>
                  <ChevronDown className="w-5 h-5 shrink-0 text-purple-300 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 border-t border-white/10">
                  <ul className="space-y-3 pt-5">{module.topics.map((topic, index) => <li key={index} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"><CheckCircle className="w-4 h-4 shrink-0 mt-1 text-green-400" />{topic}</li>)}</ul>
                  <p className="mt-5 p-4 rounded-xl bg-purple-500/10 text-purple-200 text-sm"><strong>Project: </strong>{module.miniProject}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {journey}

      {children}
    </div>
  )
}
