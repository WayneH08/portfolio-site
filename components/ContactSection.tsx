'use client'

import { Mail, Phone, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'
import { FaYoutube } from 'react-icons/fa'

const contactLinks = [
  {
    label: 'Email',
    value: 'whalliburton18@gmail.com',
    href: 'mailto:whalliburton18@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/WayneH08',
    href: 'https://github.com/WayneH08',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/wayne-halliburton-1228312b2',
    href: 'https://www.linkedin.com/in/wayne-halliburton-1228312b2/',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram — Personal',
    value: '@w4yn38urt0n',
    href: 'https://www.instagram.com/w4yn38urt0n',
    icon: FaInstagram,
  },
  {
    label: 'Instagram — Creative',
    value: '@m0o053',
    href: 'https://www.instagram.com/m0o053',
    icon: FaInstagram,
  },
  {
    label: 'YouTube',
    value: '@MRMOO53',
    href: 'https://www.youtube.com/@MRMOO53',
    icon: FaYoutube,
  },
]

export default function ContactSection() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const sectionClass = funMode
    ? 'border-t border-white/20 bg-black/20'
    : isDark
      ? 'border-t border-white/10 bg-[#0b2418]'
      : 'border-t border-emerald-100 bg-[#f7faf7]'

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

  const cardClass = funMode
    ? 'group rounded-2xl border border-white/25 bg-black/25 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-black/35'
    : isDark
      ? 'group rounded-2xl border border-white/10 bg-[#123522] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-[#164029]'
      : 'group rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50'

  const iconBoxClass = funMode
    ? 'flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-300 group-hover:bg-white/25'
    : isDark
      ? 'flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-[#07150f]'
      : 'flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white'

  const valueClass = funMode
    ? 'break-words text-sm text-white transition-colors duration-300'
    : isDark
      ? 'break-words text-sm text-emerald-100 transition-colors duration-300 group-hover:text-white'
      : 'break-words text-sm text-[#355343] transition-colors duration-300 group-hover:text-[#102018]'

  return (
    <section id="contact" className={sectionClass}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
          >
            Get In Touch
          </p>

          <h2 className={`text-3xl font-bold md:text-5xl ${headingClass}`}>
            Let&apos;s Connect
          </h2>

          <p className={`mx-auto mt-4 max-w-2xl ${bodyTextClass}`}>
            Whether it&apos;s a project, opportunity, collaboration, or just a
            quick hello, feel free to reach out through any of the links below.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon
            const isExternal = item.href.startsWith('http')

            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={cardClass}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className={iconBoxClass}>
                    <Icon size={24} />
                  </div>

                  {isExternal && (
                    <ExternalLink
                      size={18}
                      className={
                        funMode
                          ? 'text-white/80 transition-colors duration-300 group-hover:text-white'
                          : isDark
                            ? 'text-emerald-200/60 transition-colors duration-300 group-hover:text-emerald-300'
                            : 'text-emerald-700/60 transition-colors duration-300 group-hover:text-emerald-700'
                      }
                    />
                  )}
                </div>

                <h3 className={`mb-2 text-lg font-semibold ${headingClass}`}>
                  {item.label}
                </h3>

                <p className={valueClass}>{item.value}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}