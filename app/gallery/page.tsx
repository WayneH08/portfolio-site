"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function GalleryPage() {
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

  const placeholderClass =
    funMode || isDark
      ? "border-white/30 bg-white/10 text-white/60"
      : "border-emerald-300 bg-emerald-50 text-emerald-800/70"

  return (
    <main className={`min-h-screen px-6 py-28 transition-colors duration-500 ${pageClass}`}>
      <section className="mx-auto max-w-6xl">
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
          Artwork
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Art Gallery
        </h1>

        <p className={`max-w-2xl text-lg leading-8 ${paragraphClass}`}>
          This page will eventually showcase my paintings, sketches, digital
          artwork, and other creative visual projects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${cardClass}`}>
            <div className={`mb-5 flex h-44 items-center justify-center rounded-2xl border border-dashed ${placeholderClass}`}>
              Painting Placeholder
            </div>
            <h2 className="mb-2 text-2xl font-bold">Paintings</h2>
            <p className={paragraphClass}>
              Finished traditional pieces will go here.
            </p>
          </div>

          <div className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${cardClass}`}>
            <div className={`mb-5 flex h-44 items-center justify-center rounded-2xl border border-dashed ${placeholderClass}`}>
              Sketch Placeholder
            </div>
            <h2 className="mb-2 text-2xl font-bold">Sketches</h2>
            <p className={paragraphClass}>
              Studies, drawings, and concept sketches will go here.
            </p>
          </div>

          <div className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${cardClass}`}>
            <div className={`mb-5 flex h-44 items-center justify-center rounded-2xl border border-dashed ${placeholderClass}`}>
              Digital Art Placeholder
            </div>
            <h2 className="mb-2 text-2xl font-bold">Digital Art</h2>
            <p className={paragraphClass}>
              Digital illustrations and experiments will go here.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}