'use client'

import { motion } from 'framer-motion'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function AboutSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  return (
    <section
      id="about"
      className={`border-t transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
        funMode
          ? 'border-white/20 bg-white/10'
          : theme === 'dark'
            ? 'border-emerald-900/40 bg-[#13281e]/70'
            : 'border-emerald-200 bg-white/70'
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
              funMode
                ? 'text-white'
                : theme === 'dark'
                  ? 'text-emerald-400'
                  : 'text-emerald-700'
            }`}
          >
            About
          </p>

          <h2 className="text-4xl font-bold">Who am I?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`space-y-5 ${
            funMode
              ? 'text-white'
              : theme === 'dark'
                ? 'text-emerald-100'
                : 'text-[#355343]'
          }`}
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