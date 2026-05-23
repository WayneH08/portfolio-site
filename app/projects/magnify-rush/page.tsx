"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

export default function MagnifyRushPage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const demoVideo = "https://www.youtube.com/embed/pI72vP0VFwI"
  const demoVideoLink = "https://youtu.be/pI72vP0VFwI"
  const poster = "/assets/magnify-rush/design-poster.pdf"
  const flyer = "/assets/magnify-rush/handout-flyer.pdf"
  const slides = "/assets/magnify-rush/slides.pdf"

  const pageClass = funMode
    ? "fun-mode-gradient text-white"
    : theme === "dark"
      ? "bg-[#0f2419] text-emerald-50"
      : "bg-[#f4fbf6] text-[#102018]"

  const cardClass = funMode
    ? "border-white/30 bg-black/25 backdrop-blur"
    : theme === "dark"
      ? "border-emerald-900/40 bg-[#173328]"
      : "border-emerald-200 bg-white"

  const mutedTextClass = funMode
    ? "text-white"
    : theme === "dark"
      ? "text-emerald-100"
      : "text-[#355343]"

  const accentTextClass = funMode
    ? "text-white"
    : theme === "dark"
      ? "text-emerald-400"
      : "text-emerald-700"

  const buttonClass = funMode
    ? "border-white/30 bg-white/15 text-white hover:bg-white/25"
    : theme === "dark"
      ? "border-emerald-800 bg-[#0b1f15] text-emerald-100 hover:bg-[#1d3f31]"
      : "border-emerald-200 bg-white text-[#102018] hover:bg-emerald-50"

  return (
    <main
      className={`min-h-screen px-6 py-16 transition-colors duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${pageClass}`}
    >
      <section className="mx-auto max-w-6xl">
        <a
          href="/#projects"
          className={`mb-10 inline-block text-sm font-semibold transition hover:opacity-80 ${accentTextClass}`}
        >
          ← Back to Projects
        </a>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${accentTextClass}`}
            >
              Capstone Project
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Magnify Rush
            </h1>

            <p className={`mt-6 max-w-3xl text-lg leading-8 ${mutedTextClass}`}>
              Magnify Rush is a full-stack, AI-powered CRM platform designed to
              help businesses manage client relationships, organize workflows,
              centralize communication, and generate useful AI-powered insights.
              This project was built in collaboration with Magnify Dental
              Marketing for real-world use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "TypeScript",
                "React",
                "Full Stack",
                "AI",
                "CRM",
                "Database Design",
              ].map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    funMode
                      ? "bg-white/20 text-white"
                      : theme === "dark"
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl border p-6 shadow-xl ${cardClass}`}>
            <h2 className="text-2xl font-bold">Project Materials</h2>

            <p className={`mt-3 text-sm leading-6 ${mutedTextClass}`}>
              View the demo video, design poster, handout flyer, and presentation
              slides for the project.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={demoVideoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${buttonClass}`}
              >
                Open Demo Video →
              </a>

              <a
                href={poster}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${buttonClass}`}
              >
                View Design Poster →
              </a>

              <a
                href={flyer}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${buttonClass}`}
              >
                View Handout Flyer →
              </a>

              <a
                href={slides}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${buttonClass}`}
              >
                View Slide Deck →
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-12 rounded-2xl border p-6 shadow-xl ${cardClass}`}>
          <h2 className="mb-4 text-2xl font-bold">Demo Video</h2>

          <iframe
            className="aspect-video w-full rounded-xl"
            src={demoVideo}
            title="Magnify Rush Final Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className={`rounded-2xl border p-6 shadow-lg ${cardClass}`}>
            <h3 className="text-xl font-bold">Goal</h3>
            <p className={`mt-3 text-sm leading-6 ${mutedTextClass}`}>
              Build a practical CRM system that helps a business organize client
              data, improve workflows, and access useful information faster.
            </p>
          </div>

          <div className={`rounded-2xl border p-6 shadow-lg ${cardClass}`}>
            <h3 className="text-xl font-bold">My Focus</h3>
            <p className={`mt-3 text-sm leading-6 ${mutedTextClass}`}>
              Contributed to full-stack development, frontend/backend
              integration, AI-powered features, project structure, and usability.
            </p>
          </div>

          <div className={`rounded-2xl border p-6 shadow-lg ${cardClass}`}>
            <h3 className="text-xl font-bold">Outcome</h3>
            <p className={`mt-3 text-sm leading-6 ${mutedTextClass}`}>
              Delivered a real-world capstone project with a demo, poster,
              handout, and presentation materials for Senior Design.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}