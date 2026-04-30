'use client'

import { motion } from 'framer-motion'

export default function ResumeSection() {
  return (
    <section id="resume" className="border-t border-white/10 bg-slate-900/60">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-24"
      >
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
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
          >
            View Resume
          </a>

          <a
            href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
            download
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}