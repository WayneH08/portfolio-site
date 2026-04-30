'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400"
      >
        Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-4xl font-bold"
      >
        Featured Work
      </motion.h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => {
          const isExternal = project.href.startsWith('http')

          return (
            <motion.a
              key={project.title}
              href={project.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-white/10 hover:shadow-emerald-400/10"
            >
              <h3 className="text-2xl font-bold transition group-hover:text-emerald-300">
                {project.title}
              </h3>

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

              <p className="mt-6 text-sm font-semibold text-emerald-400 transition group-hover:tracking-wide">
                View project →
              </p>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}