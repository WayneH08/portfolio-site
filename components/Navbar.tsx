"use client"

import { useFunMode } from "@/components/FunModeProvider"

export default function Navbar() {
  const { funMode, toggleFunMode } = useFunMode()

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        funMode
          ? "border-white/40 bg-gradient-to-r from-red-500/90 via-yellow-300/90 via-blue-500/90 to-green-500/90"
          : "border-white/10 bg-slate-950/90"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/#home"
          className={`text-xl font-bold tracking-tight ${
            funMode ? "text-white drop-shadow-md" : "text-white"
          }`}
        >
          Wayne Halliburton
        </a>

        <div className="hidden items-center gap-6 text-sm sm:flex">
          <a href="/#about" className="text-white transition hover:scale-110">
            About
          </a>

          <a href="/#projects" className="text-white transition hover:scale-110">
            Projects
          </a>

          <a href="/videos" className="text-white transition hover:scale-110">
            Video/Animation
          </a>

          <a href="/#resume" className="text-white transition hover:scale-110">
            Resume
          </a>

          <a href="/#contact" className="text-white transition hover:scale-110">
            Contact
          </a>

          <button
            onClick={toggleFunMode}
            className={`ml-2 rounded-full px-4 py-1.5 text-xs font-bold transition hover:scale-105 ${
              funMode
                ? "bg-white text-blue-600 shadow-md shadow-white/40"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {funMode ? "🎉 Fun On" : "Fun Mode"}
          </button>
        </div>
      </div>
    </nav>
  )
}