'use client'

import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function ProjectsPage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const pageClass = funMode
    ? 'fun-mode-gradient text-white'
    : theme === 'dark'
      ? 'bg-[#0f2419] text-emerald-50'
      : 'bg-[#f4fbf6] text-[#102018]'

  const mutedTextClass = funMode
    ? 'text-white'
    : theme === 'dark'
      ? 'text-emerald-100'
      : 'text-[#355343]'

  const accentTextClass = funMode
    ? 'text-white'
    : theme === 'dark'
      ? 'text-emerald-400'
      : 'text-emerald-700'

  const cardClass = funMode
    ? 'border-white/30 bg-black/25 backdrop-blur'
    : theme === 'dark'
      ? 'border-emerald-900/40 bg-[#173328]'
      : 'border-emerald-200 bg-white'

  return (
    <main
      className={`min-h-screen px-6 py-16 transition-colors duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${pageClass}`}
    >
      <section className="mx-auto max-w-6xl">
        <a
          href="/"
          className={`mb-10 inline-block text-sm font-semibold transition hover:opacity-80 ${accentTextClass}`}
        >
          ← Back Home
        </a>

        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${accentTextClass}`}
          >
            Archive
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Projects
          </h1>

          <p className={`mt-6 max-w-2xl text-lg leading-8 ${mutedTextClass}`}>
            A curated collection of experiments, games, interactive art,
            design work, and creative coding projects.
          </p>

          <div
            className={`mt-12 rounded-2xl border px-10 py-16 shadow-xl ${cardClass}`}
          >
            <p className={mutedTextClass}>
              Rotating projector gallery coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}