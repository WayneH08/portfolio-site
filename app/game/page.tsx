"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function GamePage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === "dark"

  const pageClass = funMode
    ? "fun-mode-gradient text-white"
    : isDark
      ? "bg-[#06150f] text-white"
      : "bg-[#f5fbf4] text-[#102018]"

  const eyebrowClass = funMode || isDark ? "text-emerald-200" : "text-emerald-700"

  const paragraphClass = funMode || isDark ? "text-white/80" : "text-[#2c4738]"

  const cardClass =
    funMode || isDark
      ? "border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur"
      : "border-emerald-200 bg-white/85 text-[#102018] shadow-xl shadow-emerald-900/10 backdrop-blur"

  const ideaClass =
    funMode || isDark
      ? "bg-white/10 text-white"
      : "bg-emerald-50 text-emerald-950"

  return (
    <main className={`min-h-screen px-6 py-28 transition-colors duration-500 ${pageClass}`}>
      <section className="mx-auto max-w-5xl">
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
          Coming Soon
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Game Page
        </h1>

        <p className={`max-w-2xl text-lg leading-8 ${paragraphClass}`}>
          This page will eventually host a playable browser game, hidden easter
          eggs, interactive experiments, or other creative coding projects.
        </p>

        <div className={`mt-12 rounded-3xl border p-8 transition ${cardClass}`}>
          <h2 className="mb-4 text-2xl font-bold">Future Ideas</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`rounded-2xl p-5 ${ideaClass}`}>
              Mini browser game
            </div>

            <div className={`rounded-2xl p-5 ${ideaClass}`}>
              Hidden portfolio easter egg
            </div>

            <div className={`rounded-2xl p-5 ${ideaClass}`}>
              Fun Mode exclusive content
            </div>

            <div className={`rounded-2xl p-5 ${ideaClass}`}>
              Interactive 3D experiment
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}