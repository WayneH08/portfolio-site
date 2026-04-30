'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Eye, FileText } from 'lucide-react'

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
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Resume
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Resume
          </h2>

          <p className="mt-5 max-w-2xl text-slate-300">
            View my resume as a polished web page, open the original PDF, or
            download a copy for later.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              <FileText size={18} />
              Web Resume
            </Link>

            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              <Eye size={18} />
              View PDF
            </a>

            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-300 transition hover:-translate-y-1 hover:bg-emerald-400/10"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}