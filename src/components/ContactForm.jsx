// src/components/ContactForm.jsx
import { useState } from "react"
import emailjs from "emailjs-com"
import { Send, CheckCircle2, User, Phone, Mail, Building2, Calendar, Layers, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    year: "",
    domain: "",
    query: "",
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_3lf03w8",
        "template_etke5qk",
        form,
        "rPCZwLcm9ZTYsdCku"
      )
      .then(
        () => {
          setSent(true)
          setLoading(false)
          setForm({
            name: "",
            phone: "",
            email: "",
            college: "",
            year: "",
            domain: "",
            query: "",
          })
        },
        (error) => {
          console.error(error)
          setLoading(false)
        }
      )
  }

  const inputFields = [
    { name: "name", placeholder: "Your Name", type: "text", icon: User, required: true },
    { name: "phone", placeholder: "Phone Number", type: "tel", icon: Phone, required: true },
    { name: "email", placeholder: "Email Address", type: "email", icon: Mail, required: true },
    { name: "college", placeholder: "College Name", type: "text", icon: Building2, required: false },
    { name: "year", placeholder: "Year (e.g., 2nd year)", type: "text", icon: Calendar, required: false },
    { name: "domain", placeholder: "Interested Domain (e.g., AI, Web Dev)", type: "text", icon: Layers, required: false },
  ]

  return (
    <div
      className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #4f46e5, #60a5fa)",
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Send Us a Message
        </h2>
        <p className="text-white/35 text-sm mb-8">
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          {/* Input grid — 2 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inputFields.map((field) => {
              const Icon = field.icon
              return (
                <div key={field.name} className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/25 group-focus-within:text-purple-400" />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500/40"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(139,92,246,0.4)"
                      e.target.style.background = "rgba(255,255,255,0.06)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)"
                      e.target.style.background = "rgba(255,255,255,0.04)"
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* Textarea — full width */}
          <div className="relative group">
            <div className="absolute left-4 top-4 pointer-events-none transition-colors duration-300">
              <MessageSquare className="w-4 h-4 text-white/25 group-focus-within:text-purple-400" />
            </div>
            <textarea
              name="query"
              placeholder="Your Query (Optional)"
              value={form.query}
              onChange={handleChange}
              rows="4"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-300 focus:ring-1 focus:ring-purple-500/40"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(139,92,246,0.4)"
                e.target.style.background = "rgba(255,255,255,0.06)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)"
                e.target.style.background = "rgba(255,255,255,0.04)"
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full relative py-4 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed btn-shimmer"
            style={{
              background: loading
                ? "rgba(124,58,237,0.4)"
                : "linear-gradient(135deg, #7c3aed, #4f46e5, #7c3aed, #4f46e5)",
              backgroundSize: "200% 100%",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </span>
          </button>

          {/* Success message */}
          {sent && (
            <div
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium"
              style={{
                color: "#34d399",
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.2)",
              }}
            >
              <CheckCircle2 className="w-4 h-4" />
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
