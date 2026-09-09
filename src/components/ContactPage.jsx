"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import ContactForm from "./ContactForm"

const contactInfo = [
  {
    title: "WhatsApp",
    content: "+91 95000 34493",
    icon: Phone,
    color: "#34d399",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
  },
  {
    title: "Email",
    content: "support@codeemy.in",
    icon: Mail,
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
  },
  {
    title: "Office",
    content: "D.No: 56, LMS Street, P.N. Palayam, Coimbatore, TN – 641037",
    icon: MapPin,
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #7c3aed)",
  },
  {
    title: "Website",
    content: "www.codeemy.in",
    icon: Globe,
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)",
  },
]

const ContactPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0c29 0%, #13102e 50%, #0f0c29 100%)",
      }}
    >
      {/* Background elements */}
      <div
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-6"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Let's{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              }}
            >
              Connect
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/45 text-base md:text-lg max-w-xl mx-auto"
          >
            Have questions about courses, career guidance, or partnerships? We're
            here to help you on your learning journey.
          </motion.p>
        </div>

        {/* Main content — asymmetric 2-column */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Contact info cards (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `${item.color}06`,
                    border: `1px solid ${item.color}18`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: item.gradient,
                      boxShadow: `0 4px 16px ${item.color}25`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed break-words">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* Extra trust message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="pt-4 flex items-center gap-3 px-2"
            >
              <div
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"
              />
              <p className="text-white/30 text-xs">
                Average response time: <span className="text-white/50 font-medium">under 2 hours</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
