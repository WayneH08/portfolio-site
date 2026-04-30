'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Cpu,
  Leaf,
  Map,
  Music,
  Palette,
  Rocket,
  Wrench,
} from 'lucide-react'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function AboutSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const sectionClass = funMode
    ? 'border-white/20 bg-white/10'
    : isDark
      ? 'border-emerald-900/40 bg-[#13281e]/70'
      : 'border-emerald-200 bg-[#f6fbf7]'

  const eyebrowClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-emerald-400'
      : 'text-emerald-700'

  const headingClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-white'
      : 'text-[#173526]'

  const bodyClass = funMode
    ? 'text-white/90'
    : isDark
      ? 'text-emerald-100/90'
      : 'text-[#355343]'

  const cardClass = funMode
    ? 'border-white/20 bg-white/15 text-white shadow-xl shadow-black/10'
    : isDark
      ? 'border-emerald-800/50 bg-[#0f241a]/80 text-emerald-50 shadow-xl shadow-black/20'
      : 'border-emerald-200 bg-white/85 text-[#244735] shadow-xl shadow-emerald-950/5'

  const iconClass = funMode
    ? 'bg-white/20 text-white'
    : isDark
      ? 'bg-emerald-400/10 text-emerald-300'
      : 'bg-emerald-100 text-emerald-700'

  const highlightClass = funMode
    ? 'border-white/20 bg-white/15 text-white'
    : isDark
      ? 'border-emerald-700/50 bg-emerald-400/10 text-emerald-100'
      : 'border-emerald-200 bg-emerald-50 text-emerald-900'

  const pillClass = funMode
    ? 'border-white/20 bg-white/15 text-white'
    : isDark
      ? 'border-emerald-700/60 bg-emerald-400/10 text-emerald-100'
      : 'border-emerald-200 bg-emerald-50 text-emerald-800'

  const focusAreas = [
    {
      icon: Code2,
      title: 'Software Development',
      text: 'Building clean, useful applications with a focus on structure, usability, and real-world problem solving.',
    },
    {
      icon: Cpu,
      title: 'Backend & Systems',
      text: 'Interested in scalable systems, organized data, reliable workflows, and the logic that powers applications.',
    },
    {
      icon: Wrench,
      title: 'IT & Support',
      text: 'Motivated by troubleshooting, helping users, improving processes, and keeping technology dependable.',
    },
    {
      icon: Music,
      title: 'Audio & DSP',
      text: 'Exploring digital signal processing, audio software, effects, VSTs, and personal electronics like guitar pedals.',
    },
  ]

  const creativeTools = [
    'Ableton',
    'FL Studio',
    'Procreate',
    'Blender',
    'Music',
    'Digital Design',
  ]

  const techTools = [
    'Python',
    'C/C++',
    'Git',
    'TypeScript',
    'React Native',
    'Full-Stack Projects',
  ]

  const personalInterests = [
    'Travel',
    'Nature',
    'Wildlife',
    'Music',
    'Art',
    'Creative Tech',
  ]

  return (
    <section
      id="about"
      className={`border-t transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${sectionClass}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
            >
              About
            </p>

            <h2 className={`text-4xl font-bold tracking-tight md:text-5xl ${headingClass}`}>
              Technical builder with a creative side.
            </h2>

            <p className={`mt-6 max-w-xl text-lg leading-8 ${bodyClass}`}>
              I’m a Computer Science student at the University of North Texas
              focused on building practical, reliable software while also
              exploring the overlap between technology, music, design, nature,
              and digital creativity.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className={`rounded-2xl border p-4 ${highlightClass}`}>
                <Rocket className="mb-3 h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Goal
                </p>
                <p className="mt-2 text-sm leading-6">
                  Grow as a developer while contributing to meaningful,
                  useful work that helps others.
                </p>
              </div>

              <div className={`rounded-2xl border p-4 ${highlightClass}`}>
                <Palette className="mb-3 h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Direction
                </p>
                <p className="mt-2 text-sm leading-6">
                  Software engineering, backend systems, creative tech, and DSP.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className={`rounded-3xl border p-6 md:p-8 ${cardClass}`}>
              <h3 className="text-2xl font-bold">A little more about me</h3>

              <div className={`mt-5 space-y-5 leading-8 ${bodyClass}`}>
                <p>
                  I have experience with Python, C/C++, Git, TypeScript, React
                  Native, and full-stack development. My projects have included
                  things like CRM systems, structured data tools, mobile app
                  features, and interfaces that focus on clean design and real
                  usability.
                </p>

                <p>
                  I’m especially interested in software development, project
                  management, and IT support because I enjoy solving problems,
                  organizing systems, and building tools that make things easier
                  for people.
                </p>

                <p>
                  Outside of traditional programming, I’m drawn to creative
                  technology. I work with music, digital art, design tools, and
                  3D modeling, and I’m interested in eventually building audio
                  software, effects, VSTs, and DSP-based projects.
                </p>

                <p>
                  I also enjoy travel, nature, and wildlife. Getting outside and
                  seeing new places helps fuel my curiosity, creativity, and
                  appreciation for the details that make both natural and digital
                  worlds interesting.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -5 }}
                    className={`rounded-3xl border p-5 transition-all duration-300 ${cardClass}`}
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className={`mt-2 text-sm leading-6 ${bodyClass}`}>
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <Code2 className={`mb-4 h-5 w-5 ${eyebrowClass}`} />

                <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Technical Toolkit
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {techTools.map((tool) => (
                    <span
                      key={tool}
                      className={`rounded-full border px-3 py-1 text-sm ${pillClass}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <Music className={`mb-4 h-5 w-5 ${eyebrowClass}`} />

                <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Creative Tools
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {creativeTools.map((tool) => (
                    <span
                      key={tool}
                      className={`rounded-full border px-3 py-1 text-sm ${pillClass}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <div className="mb-4 flex gap-2">
                  <Map className={`h-5 w-5 ${eyebrowClass}`} />
                  <Leaf className={`h-5 w-5 ${eyebrowClass}`} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Outside the Screen
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {personalInterests.map((interest) => (
                    <span
                      key={interest}
                      className={`rounded-full border px-3 py-1 text-sm ${pillClass}`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}