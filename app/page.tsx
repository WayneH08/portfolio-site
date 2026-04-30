const projects = [
  {
    title: 'Tweeter',
    description:
      'A birdwatching social app built with React Native, Expo, Supabase, maps, profiles, sightings, and themed UI.',
    tech: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
  },
  {
    title: 'Magnify Rush CRM',
    description:
      'A CRM platform for managing client data, workflows, communication, scheduling, and AI-powered summaries.',
    tech: ['Next.js', 'Backend Systems', 'AI', 'Database Design'],
  },
  {
    title: 'NoTreble',
    description:
      'A music-focused programming project that works with notes, musical structures, and creative data processing.',
    tech: ['Python', 'Music Tech', 'Git'],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Wayne Halliburton
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#resume" className="hover:text-white">Resume</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="mx-auto flex max-w-6xl flex-col px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Computer Science Student
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Building clean, useful software with a creative edge.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m a Computer Science student at the University of North Texas
          interested in software development, backend systems, IT, and creative technology.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              About
            </p>
            <h2 className="text-4xl font-bold">Who I am</h2>
          </div>

          <div className="space-y-5 text-slate-300">
            <p>
              I have experience with Python, C/C++, Git, TypeScript, React Native,
              and building full-stack projects.
            </p>

            <p>
              I enjoy solving problems, organizing systems, and creating software
              that feels useful and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold">Featured Work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Resume
          </p>

          <h2 className="text-4xl font-bold">My Resume</h2>

          <p className="mt-5 max-w-2xl text-slate-300">
            View or download my resume.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Resume
            </a>

            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              download
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold">Let&apos;s connect</h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:whalliburton18@gmail.com"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/WayneH08"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/wayne-halliburton-1228312b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}