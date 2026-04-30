'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-900/60">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Contact
        </p>

        <h2 className="text-4xl font-bold">Let&apos;s connect</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:whalliburton18@gmail.com"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/WayneH08"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wayne-halliburton-1228312b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}