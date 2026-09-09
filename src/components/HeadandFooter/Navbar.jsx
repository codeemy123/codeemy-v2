"use client"

import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import logo from "../../assets/logo.png"
import avatar from "../../assets/avathar.png"
import {
  Menu, X, User, BookOpen, Home,
  GraduationCap, MessageSquare, ShieldCheck,
  LogOut, ChevronDown,
} from "lucide-react"
import LoginButton from "../LoginButton"
import { useNavigate } from "react-router-dom"

const NAV_ITEMS = [
  { id: "", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "profile", label: "My Learning", icon: GraduationCap },
  { id: "certificate", label: "Certificate", icon: ShieldCheck },
  { id: "about", label: "About", icon: MessageSquare },
]

export default function Navbar({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: "", email: "", avatar: "" })

  const profileRef = useRef(null)
  const navigate = useNavigate()

  /* ── scroll shrink ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ── Firebase auth ─────────────────────────────────────────── */
  useEffect(() => {
    const auth = getAuth()
    const db = getFirestore()
    return onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified) {
        setIsAuthenticated(true)
        try {
          const snap = await getDoc(doc(db, "users", user.uid))
          const data = snap.exists() ? snap.data() : {}
          setUserInfo({
            name: data.name || user.displayName || "Student",
            email: data.email || user.email || "",
            avatar: data.avatar || user.photoURL ||
              `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || "A"}`,
          })
        } catch (e) { console.error(e) }
      } else {
        setIsAuthenticated(false)
      }
    })
  }, [])

  /* ── click-outside profile close ──────────────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setIsProfileOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const handleNav = (id) => { navigate(`/${id}`); setIsMenuOpen(false) }

  const handleSignOut = async () => {
    try { await signOut(getAuth()); navigate("/") }
    catch (e) { console.error(e) }
  }

  /* ── Derived styles ────────────────────────────────────────── */
  // Navbar shrinks on scroll: padding + pill width tighten
  const navPy = isScrolled ? "py-2" : "py-3"
  const pillPx = isScrolled ? "px-4" : "px-6"

  return (
    /* Fixed wrapper — always full-width for positioning context */
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${isScrolled ? "pt-2" : "pt-4"} pb-2`}>

      {/* ── Floating pill ───────────────────────────────────── */}
      <nav
        className={`
          w-full transition-all duration-500 pointer-events-auto
          ${isScrolled
            ? "max-w-4xl mx-4 rounded-2xl"
            : "max-w-6xl mx-4 md:mx-8 rounded-2xl"
          }
        `}
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(196,181,253,0.75)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2), 0 0 18px rgba(139,92,246,0.18), inset 0 1px 0 rgba(237,233,254,0.25)",
        }}
      >
        <div className={`flex items-center justify-between ${navPy} ${pillPx} transition-all duration-500`}>

          {/* Logo */}
          <button
            onClick={() => handleNav("")}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}>
              <img src={logo} alt="CodeEmy" className="w-6 h-6 object-contain" />
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{
                background: "linear-gradient(90deg,#c084fc,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CodeEmy
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.filter(item => isAuthenticated || item.id !== "profile").map(({ id, label, icon: Icon }) => {
              const active = currentPage === id
              return (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`
                    flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium
                    transition-all duration-250
                    ${active
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.07]"
                    }
                  `}
                  style={active ? {
                    background: "linear-gradient(135deg,rgba(124,58,237,0.4),rgba(79,70,229,0.3))",
                    border: "1px solid rgba(124,58,237,0.35)",
                  } : {}}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              )
            })}
          </div>

          {/* Right — auth / mobile toggle */}
          <div className="flex items-center gap-3">

            {/* Auth */}
            {isAuthenticated ? (
              <div className="relative hidden md:block" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 rounded-xl px-2.5 py-1.5 hover:bg-white/[0.07] transition-all duration-250"
                >
                  <img
                    src={userInfo.avatar || avatar}
                    alt="avatar"
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-purple-400/40"
                  />
                  <span className="text-sm text-gray-300 font-medium max-w-[100px] truncate">
                    {userInfo.name}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Profile dropdown */}
                {isProfileOpen && (
                  <div
                    className="absolute right-0 top-full mt-3 w-60 rounded-2xl overflow-hidden animate-fade-in-up"
                    style={{
                      background: "rgba(18,14,42,0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)",
                    }}
                  >
                    {/* User info header */}
                    <div className="px-4 py-4 border-b border-white/[0.07] flex items-center gap-3">
                      <img src={userInfo.avatar || avatar} alt="user"
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-purple-500/30" />
                      <div className="overflow-hidden">
                        <p className="text-white text-sm font-semibold truncate">{userInfo.name}</p>
                        <p className="text-gray-500 text-xs truncate">{userInfo.email}</p>
                      </div>
                    </div>

                    {/* Menu items */}
                    <div className="py-2">
                      {[
                        { icon: User, label: "My Profile", id: "profile" },
                        { icon: GraduationCap, label: "My Courses", id: "courses" },
                        { icon: ShieldCheck, label: "My Certificates", id: "certificate" },
                      ].map(({ icon: Icon, label, id }) => (
                        <button
                          key={id}
                          onClick={() => { handleNav(id); setIsProfileOpen(false) }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:text-white hover:bg-white/[0.06] transition-all"
                        >
                          <Icon className="w-4 h-4 text-purple-400" />
                          {label}
                        </button>
                      ))}
                    </div>

                    <div className="border-t border-white/[0.07] py-2">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 text-sm hover:text-red-300 hover:bg-red-500/10 transition-all"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:block">
                <LoginButton />
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-250"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ────────────────────────────────────── */}
        {isMenuOpen && (
          <div
            className="md:hidden border-t border-white/[0.07] px-4 pb-4 pt-3 space-y-1 animate-fade-in-up"
          >
            {NAV_ITEMS.filter(item => isAuthenticated || item.id !== "profile").map(({ id, label, icon: Icon }) => {
              const active = currentPage === id
              return (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${active
                      ? "text-white bg-purple-600/30 border border-purple-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              )
            })}

            <div className="pt-2 border-t border-white/[0.07] mt-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-3 px-4 py-3">
                  <img src={userInfo.avatar || avatar} alt="user"
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-purple-400/40" />
                  <div className="flex-1 overflow-hidden">
                    <p className="text-white text-sm font-semibold truncate">{userInfo.name}</p>
                    <p className="text-gray-500 text-xs truncate">{userInfo.email}</p>
                  </div>
                  <button onClick={handleSignOut} className="text-red-400 hover:text-red-300 p-1.5 rounded-lg hover:bg-red-500/10 transition-all">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="px-2">
                  <LoginButton />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
