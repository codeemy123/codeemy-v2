import logo from "../../assets/logo.png"
import msmeLogo from "../../assets/MSME.png"
import nipLogo from "../../assets/NIP.png"
import aicteLogo from "../../assets/AICTE.png"
import isoLogo from "../../assets/ISO.png"
import startupIndiaLogo from "../../assets/startup-india.png"
import razorpayBadge from "../../assets/razorpay_payment.png"
import { useNavigate } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react"

const LINK_COLS = [
  {
    heading: "Programs",
    links: [
      { label: "Full Stack Development", to: "/course/1" },
      { label: "Data Analytics", to: "/course/6" },
      { label: "Artificial Intelligence", to: "/course/4" },
      { label: "Android & iOS App Dev", to: "/course/3" },
      { label: "Digital Marketing", to: "/course/5" },
      { label: "Medical", to: "/courses?category=Medical" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Verify Certificate", to: "/certificate" },
      { label: "Reviews", to: "/#reviews" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Cookie Policy", to: "/cookie-policy" },
    ],
  },
]

const SOCIALS = [
  { Icon: Instagram, url: "https://www.instagram.com/codeemy_official/", label: "Instagram" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/codeemy", label: "LinkedIn" },
  { Icon: Youtube, url: "https://www.youtube.com/@CodeEmyOfficial", label: "YouTube" },
  { Icon: Twitter, url: "https://twitter.com/CodeEmyOfficial", label: "Twitter" },
  { Icon: Facebook, url: "https://www.facebook.com/codeemyofficial", label: "Facebook" },
]

const GOVT_LOGOS = [
  { src: msmeLogo, alt: "Ministry of MSME, Govt. of India", className: "object-fill" },
  { src: nipLogo, alt: "National Internship Portal", className: "object-fill" },
  { src: aicteLogo, alt: "AICTE - All India Council for Technical Education", className: "object-contain p-1" },
  { src: isoLogo, alt: "ISO 9001 Certified", className: "object-contain p-1" },
  { src: startupIndiaLogo, alt: "DPIIT - Startup India", className: "object-contain p-2 bg-white" },
]

/* ── Shared glass-card style ── */
const glassCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
  backdropFilter: "blur(16px)",
  boxShadow:
    "0 0 40px rgba(99,102,241,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
}

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #0f0c29 0%, #0a0818 100%)",
      }}
    >
      {/* ── Top glow bar ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }}
      />
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ══════════════════════════════════════════
          HERO BRAND AREA  (inspired by reference)
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Tagline */}
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-white/40 text-center"
        >
          Learn.&nbsp; Build.&nbsp; Get Hired.
        </p>

        {/* Large wordmark row */}
        <div className="flex items-center justify-center gap-5 mb-4">
          {/* Logo — same visual height as the text */}
          <img
            src={logo}
            alt="CodeEmy logo"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 24px rgba(139,92,246,0.55))" }}
          />

          {/* CODEEMY wordmark */}
          <h2
            className="uppercase leading-none select-none"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 6.5vw, 5.5rem)",
              background: "linear-gradient(135deg, #ffffff 30%, rgba(167,139,250,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.04em",
            }}
          >
            CodeEmy
          </h2>
        </div>

        {/* Short brand description */}
        <p className="text-white/35 text-sm leading-relaxed max-w-lg mb-10 text-center mx-auto">
          Transforming careers through industry-expert mentorship, hands-on projects,
          and guaranteed placement support. Join the future of tech education.
        </p>

        {/* ── Divider ── */}
        <div
          className="w-full h-px mb-10"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(139,92,246,0.18), rgba(255,255,255,0.06))" }}
        />

        {/* ══════════════════════════════════════════
            TRUST BADGES — Recognition + Payments
            Single compact strip above link columns
        ══════════════════════════════════════════ */}
        <div
          className="rounded-2xl p-5 sm:p-6 mb-10"
          style={glassCard}
        >
          {/* Labels row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-purple-400" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                Officially Recognized By
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Secure Payments
              </h3>
            </div>
          </div>

          {/* Recognition badges and a wider payment badge share one row on desktop. */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,2fr)] gap-3">
            {GOVT_LOGOS.map((item) => (
              <div
                key={item.alt}
                className="flex items-center justify-center rounded-xl p-0 h-24 transition-all duration-300 hover:scale-[1.04] overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full ${item.className}`}
                  loading="lazy"
                />
              </div>
            ))}

            {/* Payment badge — spans 2 columns for the wide Razorpay image */}
            <div
              className="col-span-2 sm:col-span-1 lg:col-span-1 flex items-center justify-center rounded-xl p-0 h-24 transition-all duration-300 hover:scale-[1.04] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src={razorpayBadge}
                alt="Secure Payments Powered By Razorpay"
                className="w-full h-full object-fill"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            LINK COLUMNS  in floating glass cards
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {LINK_COLS.map((col) => (
            <div
              key={col.heading}
              className="rounded-2xl p-6"
              style={glassCard}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.to)}
                      className="group flex items-center gap-1.5 text-sm text-white/45 hover:text-white transition-colors duration-200 text-left"
                    >
                      <ArrowUpRight
                        className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-purple-400 flex-shrink-0"
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Social icons ── */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {SOCIALS.map(({ Icon, url, label }) => (
            <button
              key={label}
              onClick={() => window.open(url, "_blank")}
              aria-label={label}
              className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Icon className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors duration-200" />
            </button>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          {/* Copyright */}
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} CodeEmy. All rights reserved.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <MapPin className="w-3 h-3 text-white/35" />
              </div>
              <span className="text-white/35 text-xs">Coimbatore, India</span>
            </div>

            <a href="tel:+919500034493" className="group flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center group-hover:border-purple-500/30 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Phone className="w-3 h-3 text-white/35 group-hover:text-purple-400 transition-colors" />
              </div>
              <span className="text-white/35 text-xs group-hover:text-white transition-colors">+91 95000 34493</span>
            </a>

            <a href="mailto:info@codeemy.in" className="group flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center group-hover:border-purple-500/30 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Mail className="w-3 h-3 text-white/35 group-hover:text-purple-400 transition-colors" />
              </div>
              <span className="text-white/35 text-xs group-hover:text-white transition-colors">info@codeemy.in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
