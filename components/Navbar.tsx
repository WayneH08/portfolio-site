"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react"
import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function Navbar() {
  const pathname = usePathname()
  const { funMode, toggleFunMode } = useFunMode()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")

  const isDarkStyle = funMode || theme === "dark"

  useEffect(() => {
    function updateHash() {
      setCurrentHash(window.location.hash)
    }

    updateHash()
    window.addEventListener("hashchange", updateHash)

    return () => {
      window.removeEventListener("hashchange", updateHash)
    }
  }, [])

  const navLinks = [
    { label: "About", href: "/#about", hash: "#about" },
    { label: "Projects", href: "/#projects", hash: "#projects" },
    { label: "Video/Animation", href: "/videos" },
    { label: "Gallery", href: "/gallery" },
    { label: "Fun & Games", href: "/game" },
    { label: "Resume", href: "/#resume", hash: "#resume" },
    { label: "Contact", href: "/#contact", hash: "#contact" },
  ]

  function isActiveLink(link: {
    label: string
    href: string
    hash?: string
  }) {
    if (link.href === "/videos") return pathname === "/videos"
    if (link.href === "/gallery") return pathname === "/gallery"
    if (link.href === "/game") return pathname === "/game"

    return pathname === "/" && currentHash === link.hash
  }

  const navbarClass = funMode
    ? "border-white/40 fun-mode-navbar-gradient text-white"
    : theme === "dark"
      ? "border-emerald-900/40 bg-[#07150f]/92 text-white"
      : "border-emerald-200 bg-[#f8fff7]/92 text-[#102018]"

  const linkClass = isDarkStyle
    ? "text-emerald-50/85 hover:text-emerald-300"
    : "text-[#203b2c] hover:text-emerald-700"

  const activeLinkClass = isDarkStyle
    ? "text-emerald-300"
    : "text-emerald-700"

  const mobilePanelClass = funMode
    ? "border-white/30 bg-white/15 text-white backdrop-blur-xl"
    : theme === "dark"
      ? "border-emerald-900/60 bg-[#07150f]/95 text-white"
      : "border-emerald-200 bg-[#f8fff7]/95 text-[#102018]"

  return (
    <nav
      className={`sticky top-0 z-50 border-b shadow-lg backdrop-blur-xl transition-all duration-700 ${navbarClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8">
        {/* LOGO + NAME */}
        <a
          href="/#home"
          onClick={() => setMenuOpen(false)}
          className="group flex min-w-fit items-center gap-3"
        >
          <img
            src="/favicon.png"
            alt="Wayne Halliburton logo"
            className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
          />

          <span
            className={`whitespace-nowrap text-base font-extrabold tracking-tight md:text-lg ${
              isDarkStyle ? "text-white" : "text-[#102018]"
            }`}
          >
            Wayne D. Halliburton
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {navLinks.map((link) => {
            const active = isActiveLink(link)

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative transition hover:-translate-y-0.5 ${
                  active ? activeLinkClass : linkClass
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-emerald-400" />
                )}
              </a>
            )
          })}
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleTheme}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold shadow-md transition hover:-translate-y-0.5 hover:scale-105 ${
              theme === "dark"
                ? "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
                : "bg-[#102018] text-white hover:bg-[#193527]"
            }`}
          >
            {theme === "dark" ? (
              <>
                <Sun size={14} />
                Light Mode
              </>
            ) : (
              <>
                <Moon size={14} />
                Dark Mode
              </>
            )}
          </button>

          <button
            onClick={toggleFunMode}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold shadow-md transition hover:-translate-y-0.5 hover:scale-105 ${
              funMode
                ? "bg-yellow-300 text-[#07150f] shadow-yellow-200/50 hover:bg-yellow-200"
                : "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
            }`}
          >
            <Sparkles size={14} />
            {funMode ? "Fun On" : "Fun Mode"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((current) => !current)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition hover:scale-105 lg:hidden ${
            isDarkStyle
              ? "border-white/20 bg-white/10 text-white"
              : "border-emerald-200 bg-white text-[#102018]"
          }`}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-5 pb-4 lg:hidden">
          <div
            className={`mx-auto max-w-7xl rounded-2xl border p-3 shadow-xl ${mobilePanelClass}`}
          >
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = isActiveLink(link)

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                      active
                        ? isDarkStyle
                          ? "bg-white/10 text-emerald-300"
                          : "bg-emerald-100 text-emerald-800"
                        : isDarkStyle
                          ? "text-white/90 hover:bg-white/10"
                          : "text-[#102018] hover:bg-emerald-100"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <div className="mt-3 grid gap-2 border-t border-current/10 pt-3 sm:grid-cols-2">
              <button
                onClick={() => {
                  toggleTheme()
                  setMenuOpen(false)
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition hover:scale-[1.02] ${
                  theme === "dark"
                    ? "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
                    : "bg-[#102018] text-white hover:bg-[#193527]"
                }`}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>

              <button
                onClick={() => {
                  toggleFunMode()
                  setMenuOpen(false)
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition hover:scale-[1.02] ${
                  funMode
                    ? "bg-yellow-300 text-[#07150f] hover:bg-yellow-200"
                    : "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
                }`}
              >
                <Sparkles size={16} />
                {funMode ? "Fun On" : "Fun Mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}