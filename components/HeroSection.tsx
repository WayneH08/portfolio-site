'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function HeroSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${
              funMode
                ? 'text-white'
                : theme === 'dark'
                  ? 'text-emerald-400'
                  : 'text-emerald-700'
            }`}
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
            className={`mt-6 max-w-2xl text-lg leading-8 ${
              funMode
                ? 'text-white'
                : theme === 'dark'
                  ? 'text-emerald-100'
                  : 'text-[#355343]'
            }`}
          >
            I&apos;m a Computer Science student at the University of North Texas
            interested in software development, project management, IT, and creative technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-[#07150f] transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-6 py-3 font-semibold transition hover:-translate-y-1 ${
                funMode || theme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-emerald-300 text-[#102018] hover:bg-emerald-100'
              }`}
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative h-[420px] w-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-[520px] md:w-[380px]"
          >
            <Image
              src="/headshot.jpg"
              alt="Wayne Headshot"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              priority
            />

            <div className="absolute inset-0 transition duration-500 hover:bg-white/5" />

            {funMode && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/60" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}