"use client"

type PacmanMiniGameProps = {
  funMode: boolean
  isDark: boolean
}

export default function PacmanMiniGame({
  funMode,
  isDark,
}: PacmanMiniGameProps) {
  const shellClass =
    funMode || isDark
      ? "border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur"
      : "border-emerald-200 bg-white/95 text-emerald-950 shadow-xl shadow-emerald-900/10"

  const mutedTextClass = funMode || isDark ? "text-white/70" : "text-[#3d5a49]"

  const cardClass =
    funMode || isDark
      ? "border-white/10 bg-black/15 text-white/75"
      : "border-emerald-100 bg-emerald-50/80 text-emerald-900"

  return (
    <section
      className={`mx-auto max-w-5xl rounded-3xl border p-6 transition-all duration-300 md:p-8 ${shellClass}`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Game Lab
            </span>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                funMode || isDark
                  ? "border-white/15 bg-white/10 text-white/70"
                  : "border-emerald-200 bg-white text-emerald-700"
              }`}
            >
              Coming Later
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Mini Game Placeholder
          </h2>

          <p
            className={`mt-4 max-w-2xl text-sm leading-7 md:text-base ${mutedTextClass}`}
          >
           future browser game project
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span
              className={`rounded-2xl border px-4 py-3 text-sm font-bold ${cardClass}`}
            >
              Godot build planned
            </span>

            <span
              className={`rounded-2xl border px-4 py-3 text-sm font-bold ${cardClass}`}
            >
              Playable demo later
            </span>

            <span
              className={`rounded-2xl border px-4 py-3 text-sm font-bold ${cardClass}`}
            >
              Arcade concept
            </span>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-[2rem] border p-6 text-center ${cardClass}`}
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] border border-emerald-300/20 bg-emerald-400/10 text-6xl shadow-inner">
              🎮
            </div>

            <h3 className="mt-6 text-2xl font-black">Game Project</h3>

            <p
              className={`mx-auto mt-3 max-w-sm text-sm leading-6 ${mutedTextClass}`}
            >
              Placeholder for browser game project.
            </p>

            <div
              className={`mt-6 rounded-2xl border p-4 text-center text-sm font-bold uppercase tracking-[0.18em] ${
                funMode || isDark
                  ? "border-white/10 bg-white/10 text-white/75"
                  : "border-emerald-100 bg-white text-emerald-700"
              }`}
            >
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}