'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            About
          </p>
          <h2 className="text-4xl font-bold">Who I am</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-slate-300"
        >
          <p>
            I have experience with Python, C/C++, Git, TypeScript, React Native,
            and building full-stack projects.
          </p>

          <p>
            I enjoy solving problems, organizing systems, and creating software
            that feels useful and easy to use.
          </p>
        </motion.div>
      </div>
    </section>
  )
}