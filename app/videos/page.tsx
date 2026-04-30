"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function VideosPage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const videoProjects = [
    {
      title: "Animation Project Placeholder",
      description:
        "A future space for animation tests, motion graphics, Blender renders, or short creative experiments.",
      tag: "Animation",
    },
    {
      title: "Video Project Placeholder",
      description:
        "A future section for edited videos, demo reels, music visuals, or behind-the-scenes project clips.",
      tag: "Video",
    },
    {
      title: "3D / Motion Placeholder",
      description:
        "A flexible area for future 3D modeling, interactive visuals, or experimental portfolio pieces.",
      tag: "3D",
    },
  ]

  return (
    <main
      className={`min-h-screen px-6 py-16 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
        funMode
          ? "fun-mode-gradient text-white"
          : theme === "dark"
            ? "bg-[#0f2419] text-emerald-50"
            : "bg-[#f4fbf6] text-[#102018]"
      }`}
    >
      <section className="mx-auto max-w-5xl">
        <p
          className={`mb-3 text-sm uppercase tracking-[0.3em] ${
            funMode
              ? "text-white"
              : theme === "dark"
                ? "text-emerald-400"
                : "text-emerald-700"
          }`}
        >
          Creative Work
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Video & Animation
        </h1>

        <p
          className={`mb-12 max-w-2xl text-lg ${
            funMode
              ? "text-white"
              : theme === "dark"
                ? "text-emerald-100"
                : "text-[#355343]"
          }`}
        >
          This page will eventually showcase video projects, animation tests,
          3D work, motion graphics, and other creative experiments.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {videoProjects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl border p-6 shadow-xl transition-colors duration-500 ${
                funMode
                  ? "border-white/30 bg-black/25 backdrop-blur hover:bg-black/35"
                  : theme === "dark"
                    ? "border-emerald-900/40 bg-[#173328] hover:bg-[#1d3f31]"
                    : "border-emerald-200 bg-white hover:bg-emerald-50"
              }`}
            >
              <div
                className={`mb-4 flex h-40 items-center justify-center rounded-xl text-5xl ${
                  funMode
                    ? "bg-black/25"
                    : theme === "dark"
                      ? "bg-[#0b1f15]"
                      : "bg-emerald-100"
                }`}
              >
                🎬
              </div>

              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-sm ${
                  funMode
                    ? "bg-white/20 text-white"
                    : theme === "dark"
                      ? "bg-emerald-400/15 text-emerald-200"
                      : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {project.tag}
              </span>

              <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>

              <p
                className={`text-sm leading-6 ${
                  funMode
                    ? "text-white"
                    : theme === "dark"
                      ? "text-emerald-100"
                      : "text-[#355343]"
                }`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}