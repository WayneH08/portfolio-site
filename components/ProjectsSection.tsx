'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function ProjectsSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
          funMode
            ? 'text-white'
            : theme === 'dark'
              ? 'text-emerald-400'
              : 'text-emerald-700'
        }`}
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
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
            >
              <a
                href={project.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group block rounded-2xl border p-6 shadow-lg transition-colors duration-500 hover:-translate-y-2 hover:transition-transform ${
                  funMode
                    ? 'border-white/30 bg-white/20 hover:bg-white/30'
                    : theme === 'dark'
                      ? 'border-emerald-900/40 bg-[#173328] hover:border-emerald-400/60 hover:bg-[#1d3f31]'
                      : 'border-emerald-200 bg-white hover:border-emerald-500 hover:bg-emerald-50'
                }`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    funMode
                      ? 'text-white'
                      : theme === 'dark'
                        ? 'text-emerald-50'
                        : 'text-[#102018]'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    funMode
                      ? 'text-white'
                      : theme === 'dark'
                        ? 'text-emerald-100'
                        : 'text-[#355343]'
                  }`}
                >
                  {project.description}
                </p>

                {'assets' in project && project.assets && (
                  <div
                    className={`mt-4 text-xs font-medium ${
                      funMode
                        ? 'text-white'
                        : theme === 'dark'
                          ? 'text-emerald-300'
                          : 'text-emerald-700'
                    }`}
                  >
                    Demo video, poster, flyer, and slides included
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                        funMode
                          ? 'bg-white/25 text-white'
                          : theme === 'dark'
                            ? 'bg-emerald-400/10 text-emerald-300'
                            : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p
                  className={`mt-6 text-sm font-semibold transition-[letter-spacing] duration-300 group-hover:tracking-wide ${
                    funMode
                      ? 'text-white'
                      : theme === 'dark'
                        ? 'text-emerald-400'
                        : 'text-emerald-700'
                  }`}
                >
                  View project →
                </p>
              </a>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}