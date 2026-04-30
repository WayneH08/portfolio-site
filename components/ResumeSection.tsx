'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Eye, FileText } from 'lucide-react'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function ResumeSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const sectionClass = funMode
    ? 'border-t border-white/20 bg-black/20'
    : isDark
      ? 'border-t border-white/10 bg-[#102f20]'
      : 'border-t border-emerald-100 bg-gradient-to-br from-[#f7faf7] via-[#eef8f1] to-[#dcfce7]'

  const eyebrowClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-emerald-400'
      : 'text-emerald-700'

  const headingClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-white'
      : 'text-[#102018]'

  const bodyTextClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-emerald-100'
      : 'text-[#355343]'

  const outlineButtonClass = funMode
    ? 'inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10'
    : isDark
      ? 'inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10'
      : 'inline-flex items-center gap-2 rounded-full border border-emerald-300 px-6 py-3 font-semibold text-[#102018] transition hover:-translate-y-1 hover:bg-emerald-100'

  const downloadButtonClass = funMode
    ? 'inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10'
    : isDark
      ? 'inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-300 transition hover:-translate-y-1 hover:bg-emerald-400/10'
      : 'inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/60 px-6 py-3 font-semibold text-emerald-800 shadow-sm shadow-emerald-950/5 transition hover:-translate-y-1 hover:bg-emerald-100'

  return (
    <section id="resume" className={sectionClass}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="max-w-3xl">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
          >
            Resume
          </p>

          <h2 className={`text-4xl font-bold md:text-5xl ${headingClass}`}>
            My Resume
          </h2>

          <p className={`mt-5 max-w-2xl ${bodyTextClass}`}>
            View my resume as a polished web page, open the original PDF, or
            download a copy for later.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-[#07150f] transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              <FileText size={18} />
              Web Resume
            </Link>

            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={outlineButtonClass}
            >
              <Eye size={18} />
              View PDF
            </a>

            <a
              href="/Wayne_Halliburton_Resume_04_20_2026.pdf"
              download
              className={downloadButtonClass}
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