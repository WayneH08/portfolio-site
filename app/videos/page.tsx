export default function VideosPage() {
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
    <main className="px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-300">
          Creative Work
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Video & Animation
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-slate-300">
          This page will eventually showcase video projects, animation tests,
          3D work, motion graphics, and other creative experiments.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {videoProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-black/30 text-5xl">
                🎬
              </div>

              <span className="mb-3 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-sm text-pink-200">
                {project.tag}
              </span>

              <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>

              <p className="text-sm leading-6 text-slate-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}