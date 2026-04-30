'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto flex max-w-6xl flex-col px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400"
      >
        Computer Science Student
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl"
      >
        Building clean, useful software with a creative edge.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
      >
        I&apos;m a Computer Science student at the University of North Texas
        interested in software development, backend systems, IT, and creative technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}