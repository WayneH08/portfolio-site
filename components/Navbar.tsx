"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function Navbar() {
  const { funMode, toggleFunMode } = useFunMode()
  const { theme, toggleTheme } = useTheme()

  const linkClass =
    funMode || theme === "dark"
      ? "text-emerald-50 transition hover:scale-110 hover:text-white"
      : "text-[#102018] transition hover:scale-110 hover:text-emerald-700"

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] will-change-[background,color] ${
        funMode
          ? "border-white/40 fun-mode-navbar-gradient"
          : theme === "dark"
            ? "border-emerald-900/40 bg-[#0b1f15]/95"
            : "border-emerald-200 bg-white/90"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/#home"
          className={`text-xl font-bold tracking-tight ${
            funMode || theme === "dark" ? "text-emerald-50" : "text-[#102018]"
          }`}
        >
          Wayne D. Halliburton
        </a>

        <div className="hidden items-center gap-6 text-sm sm:flex">
          <a href="/#about" className={linkClass}>
            About
          </a>

          <a href="/#projects" className={linkClass}>
            Projects
          </a>

          <a href="/videos" className={linkClass}>
            Video/Animation
          </a>

          <a href="/#resume" className={linkClass}>
            Resume
          </a>

          <a href="/#contact" className={linkClass}>
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition hover:scale-105 ${
              theme === "dark"
                ? "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
                : "bg-[#102018] text-white hover:bg-[#193527]"
            }`}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            onClick={toggleFunMode}
            className={`ml-2 rounded-full px-4 py-1.5 text-xs font-bold transition hover:scale-105 ${
              funMode
                ? "bg-white text-blue-600 shadow-md shadow-white/40"
                : "bg-emerald-400 text-[#07150f] hover:bg-emerald-300"
            }`}
          >
            {funMode ? "🎉 Fun On" : "Fun Mode"}
          </button>
        </div>
      </div>
    </nav>
  )
}