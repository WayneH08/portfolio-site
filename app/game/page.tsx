"use client"

import PacmanMiniGame from "@/components/PacmanMiniGame"
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

  const eyebrowClass =
    funMode || isDark ? "text-emerald-200" : "text-emerald-700"

  const paragraphClass =
    funMode || isDark ? "text-white/80" : "text-[#2c4738]"

  const cardClass =
    funMode || isDark
      ? "border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur"
      : "border-emerald-200 bg-white/90 text-[#102018] shadow-xl shadow-emerald-900/10 backdrop-blur"

  const softCardClass =
    funMode || isDark
      ? "border-white/10 bg-white/10 text-white"
      : "border-emerald-100 bg-emerald-50/80 text-emerald-950"

  const mutedTextClass =
    funMode || isDark ? "text-white/70" : "text-[#3d5a49]"

  const badgeClass =
    funMode || isDark
      ? "border-white/15 bg-white/10 text-emerald-100"
      : "border-emerald-200 bg-white text-emerald-800"

  const ideas = [
    "Mini browser game",
    "Hidden portfolio easter egg",
    "Fun Mode exclusive content",
    "Interactive 3D experiment",
  ]

  const toolIdeas = [
    {
      title: "p5.js / Processing",
      description:
        "I use this for creative coding, simple animations, generative art, and interactive visual experiments in the browser.",
      tag: "Creative Coding",
    },
    {
      title: "Phaser",
      description:
        "I use for browser games with scenes, sprites, collisions, controls, and game loops.",
      tag: "Browser Games",
    },
    {
      title: "Three.js / React Three Fiber",
      description:
        "I use this for 3D experiments, models, floating objects, and interactive scenes.",
      tag: "3D",
    },
    {
      title: "Pygame Concepts",
      description:
        "I have used for small game projects.",
      tag: "Game Logic",
    },
  ]

  return (
    <main
      className={`min-h-screen px-6 py-28 transition-colors duration-500 ${pageClass}`}
    >
      <section className="mx-auto max-w-6xl">
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
        >
          Creative Playground
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Fun & Games
            </h1>

            <p className={`max-w-2xl text-lg leading-8 ${paragraphClass}`}>
              This page will host a collection of simple browser games and creative coding projects!
              As well as some interactive projects connected to the rest of my portfolio!!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className={`rounded-full border px-4 py-2 text-sm ${badgeClass}`}>
                Browser Games
              </span>
              <span className={`rounded-full border px-4 py-2 text-sm ${badgeClass}`}>
                Creative Coding
              </span>
              <span className={`rounded-full border px-4 py-2 text-sm ${badgeClass}`}>
                3D Experiments
              </span>
              <span className={`rounded-full border px-4 py-2 text-sm ${badgeClass}`}>
                Easter Eggs
              </span>
            </div>
          </div>

          <div className={`rounded-3xl border p-6 ${cardClass}`}>
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}
            >
              Game Lab
            </p>

            <h2 className="mb-4 text-2xl font-bold">Why this page exists</h2>

            <p className={`text-sm leading-7 ${mutedTextClass}`}>
              This section is for experiments that still show real
              technical skill: game loops, state management, controls, animation,
              collision logic, canvas-style layouts, and eventually some 3D scenes amybe :).
            </p>
          </div>
        </div>

        <div className="mt-14">
          <PacmanMiniGame funMode={funMode} isDark={isDark} />
        </div>

        <div className={`mt-14 rounded-3xl border p-8 transition ${cardClass}`}>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className={`mb-2 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}
              >
                Note Board
              </p>

              <h2 className="text-3xl font-bold">Future Ideas</h2>
            </div>

            <p className={`max-w-md text-sm leading-6 ${mutedTextClass}`}>
              future
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ideas.map((idea) => (
              <div
                key={idea}
                className={`rounded-2xl border p-5 font-medium transition hover:-translate-y-1 hover:shadow-lg ${softCardClass}`}
              >
                {idea}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {toolIdeas.map((tool) => (
            <div
              key={tool.title}
              className={`rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${cardClass}`}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">{tool.title}</h3>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeClass}`}
                >
                  {tool.tag}
                </span>
              </div>

              <p className={`leading-7 ${mutedTextClass}`}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-10 rounded-3xl border p-8 ${cardClass}`}>
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}
          >
            Next Upgrade Path
          </p>

          <h2 className="mb-4 text-3xl font-bold">
            Futureeeeeeeeeee
          </h2>

          <p className={`max-w-3xl leading-8 ${paragraphClass}`}>
            this page will eventually contain a collection of small
            projects using p5.js, Phaser, Three.js, React Three Fiber, and other custom
            canvas experiments.
          </p>
        </div>
      </section>
    </main>
  )
}