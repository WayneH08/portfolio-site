'use client'

import Link from 'next/link'
import type { ElementType } from 'react'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'
import {
  ArrowLeft,
  Download,
  Eye,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  FolderGit2,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const pdfPath = '/Wayne_Halliburton_Resume_06_12_2026.pdf'

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'C/C++', 'JavaScript basic'],
  },
  {
    title: 'Tools & Technologies',
    items: [
      'Git',
      'GitHub',
      'Linux basic',
      'VS Code',
      'Google Colab',
      'Microsoft Office',
      'Figma',
    ],
  },
  {
    title: 'Concepts',
    items: [
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Debugging',
      'Software Development with Artificial Intelligence',
    ],
  },
  {
    title: 'Other',
    items: ['Documentation', 'Creative Problem-Solving', 'Adaptability', 'Teamwork'],
  },
]

const projects = [
  {
    title: 'Magnify Rush - CRM System',
    bullets: [
      'A full-stack CRM to centralize client data, communication, and scheduling workflows.',
      'Implemented AI-powered search and summaries using Gemini to improve data access and decision-making.',
      'Developed a scalable, secure system using Angular, FastAPI, PostgreSQL, and Google Cloud Run.',
    ],
  },
  {
    title: 'NoTreble – Music Tool',
    bullets: [
      'Developed a tool to process and manipulate musical data including notes, structures, and transformations.',
      'Implemented core logic for handling and transforming musical input programmatically.',
      'Designed clean, modular code to ensure usability and maintainability.',
    ],
  },
  {
    title: 'Go Nuts - Pygame Project',
    subtitle: 'In Progress',
    bullets: [
      'Developing an interactive game using Python and Pygame.',
      'Implemented game mechanics, event handling, and user input processing.',
    ],
  },
]

const experience = [
  {
    role: 'Resident Assistant',
    company: 'UNT',
    location: 'Denton, TX',
    date: 'Aug 2024 – Current',
    bullets: [
      'Managed incidents and documented reports with attention to detail and accuracy.',
      'Resolved conflicts and made decisions under pressure, improving problem-solving skills.',
      'Maintained communication with teams and followed structured protocols.',
    ],
  },
    {
    role: 'Information Technology Help Desk Technician',
    company: 'UNT',
    location: 'Denton, TX',
    date: 'Aug 2023 – May 2026',
    subtitle: 'Part-Time',
    bullets: [
      'Provided technical support for campus computing environments, diagnosing and resolving hardware, software, and network issues.',
      'Maintained documentation of support tickets and collaborated with team members to streamline help desk procedures.',
    ],
  },
  {
    role: 'Conference Assistant',
    company: 'UNT',
    location: 'Denton, TX',
    date: 'May 2025 – Current',
    subtitle: 'Seasonal/Summer',
    bullets: [
      'Coordinated logistics and supported system-based check-ins and operations.',
      'Assisted with troubleshooting guest issues in a fast-paced environment.',
    ],
  },
  {
    role: 'Part-Time Desk Clerk',
    company: 'UNT',
    location: 'Denton, TX',
    date: 'Aug 2022 – Aug 2024',
    bullets: [
      'Monitored systems, maintained logs, and handled access control processes.',
      'Assisted users and resolved issues efficiently, similar to IT support roles.',
    ],
  },
  {
    role: 'Cashier/Expo',
    company: 'Boat Town Burger Bar',
    location: 'Kingsland, TX',
    date: 'May 2019 – Aug 2022',
    bullets: [
      'Operated POS systems and handled transactions accurately.',
      'Developed strong communication and multitasking skills in high-pressure settings.',
    ],
  },
]

function SectionHeader({
  icon: Icon,
  title,
  funMode,
  theme,
}: {
  icon: ElementType
  title: string
  funMode: boolean
  theme: 'dark' | 'light'
}) {
  const isDark = theme === 'dark'

  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
          funMode
            ? 'bg-white/15 text-white'
            : isDark
              ? 'bg-emerald-400/10 text-emerald-300'
              : 'bg-emerald-100 text-emerald-700'
        }`}
      >
        <Icon size={20} />
      </div>

      <h2
        className={`text-2xl font-bold ${
          funMode
            ? 'text-white'
            : isDark
              ? 'text-white'
              : 'text-[#102018]'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}

export default function ResumePage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const pageClass = funMode
    ? 'fun-mode-gradient min-h-screen'
    : isDark
      ? 'min-h-screen bg-[#0b2418] text-white'
      : 'min-h-screen bg-[#f7faf7] text-[#102018]'

  const heroClass = funMode
    ? 'border-b border-white/20 bg-black/25 backdrop-blur-sm'
    : isDark
      ? 'border-b border-white/10 bg-[#0b2418]'
      : 'border-b border-emerald-100 bg-[#f7faf7]'

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

  const mutedTextClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-emerald-100'
      : 'text-[#355343]'

  const subtleTextClass = funMode
    ? 'text-white'
    : isDark
      ? 'text-emerald-100/80'
      : 'text-[#4f6b5c]'

  const cardClass = funMode
    ? 'rounded-3xl border border-white/25 bg-black/30 p-6 shadow-2xl shadow-black/20 backdrop-blur-md'
    : isDark
      ? 'rounded-3xl border border-white/10 bg-[#102f20] p-6 shadow-2xl shadow-black/25'
      : 'rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/10'

  const innerCardClass = funMode
    ? 'rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-sm'
    : isDark
      ? 'rounded-2xl border border-white/10 bg-[#0b2418] p-5'
      : 'rounded-2xl border border-emerald-100 bg-[#f7faf7] p-5'

  const pillClass = funMode
    ? 'rounded-full border border-white/25 bg-white/15 px-3 py-1 text-sm font-semibold text-white'
    : isDark
      ? 'rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300'
      : 'rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700'

  const skillPillClass = funMode
    ? 'rounded-full border border-white/25 bg-white/15 px-3 py-1 text-sm text-white'
    : isDark
      ? 'rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100'
      : 'rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800'

  const outlineButtonClass = funMode
    ? 'inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10'
    : isDark
      ? 'inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10'
      : 'inline-flex items-center gap-2 rounded-full border border-emerald-300 px-5 py-2.5 text-sm font-semibold text-[#102018] transition hover:-translate-y-1 hover:bg-emerald-100'

  const bulletDotClass = funMode
    ? 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white'
    : isDark
      ? 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300'
      : 'mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600'

  return (
    <main className={pageClass}>
      <section className={heroClass}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Link
            href="/#resume"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-semibold transition ${
              funMode
                ? 'text-white hover:text-white/80'
                : isDark
                  ? 'text-emerald-300 hover:text-emerald-200'
                  : 'text-emerald-700 hover:text-emerald-600'
            }`}
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p
                className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
              >
                Web Resume
              </p>

              <h1 className={`text-4xl font-bold md:text-6xl ${headingClass}`}>
                Wayne Halliburton
              </h1>

              <p className={`mt-5 max-w-3xl text-lg leading-8 ${bodyTextClass}`}>
                Computer Science student with experience in Python, C/C++, and
                Git, with a foundation in algorithms and software engineering.
                Interested in software development, IT, and backend systems,
                with hands-on project experience and strong problem-solving
                skills.
              </p>
            </div>

            <div className={cardClass}>
              <div className={`space-y-4 text-sm ${mutedTextClass}`}>
                <p className="flex items-center gap-3">
                  <MapPin
                    size={18}
                    className={funMode || isDark ? 'text-emerald-300' : 'text-emerald-700'}
                  />
                  Denton, TX 76210
                </p>

                <a
                  href="tel:email for phone contact info"
                  className="flex items-center gap-3 transition hover:text-emerald-400"
                >
                  <Phone
                    size={18}
                    className={funMode || isDark ? 'text-emerald-300' : 'text-emerald-700'}
                  />
                  email for phone contact info
                </a>

                <a
                  href="mailto:whalliburton18@gmail.com"
                  className="flex items-center gap-3 transition hover:text-emerald-400"
                >
                  <Mail
                    size={18}
                    className={funMode || isDark ? 'text-emerald-300' : 'text-emerald-700'}
                  />
                  whalliburton18@gmail.com
                </a>

                <a
                  href="https://github.com/WayneH08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-emerald-400"
                >
                  <FaGithub
                    size={18}
                    className={funMode || isDark ? 'text-emerald-300' : 'text-emerald-700'}
                  />
                  github.com/WayneH08
                </a>

                <a
                  href="https://www.linkedin.com/in/wayne-halliburton-1228312b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-emerald-400"
                >
                  <FaLinkedin
                    size={18}
                    className={funMode || isDark ? 'text-emerald-300' : 'text-emerald-700'}
                  />
                  LinkedIn Profile
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#07150f] transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  <Eye size={16} />
                  View PDF
                </a>

                <a href={pdfPath} download className={outlineButtonClass}>
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <div className={cardClass}>
            <SectionHeader
              icon={GraduationCap}
              title="Education"
              funMode={funMode}
              theme={theme}
            />

            <div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className={`text-xl font-semibold ${headingClass}`}>
                    University of North Texas
                  </h3>

                  <p className={subtleTextClass}>Denton, Texas</p>
                </div>

                <p className={pillClass}>Expected May 2026</p>
              </div>

              <p className={`mt-4 ${mutedTextClass}`}>
                Bachelor of Science – Computer Science, ABET accredited
              </p>

              <p className={`mt-2 ${mutedTextClass}`}>
                GPA:{' '}
                <span className={`font-semibold ${headingClass}`}>3.87</span>
              </p>

              <p className={`mt-2 ${mutedTextClass}`}>
                Minor: New Media Art, Technical Communications
              </p>

              <p className={`mt-4 text-sm leading-6 ${subtleTextClass}`}>
                Relevant Coursework: Software Engineering, Algorithms, Creative
                Coding, Augmented and Virtual Reality Art
              </p>
            </div>
          </div>

          <div className={cardClass}>
            <SectionHeader
              icon={Code2}
              title="Technical Skills"
              funMode={funMode}
              theme={theme}
            />

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <h3 className={`mb-2 font-semibold ${headingClass}`}>
                    {skill.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className={skillPillClass}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className={cardClass}>
            <SectionHeader
              icon={FolderGit2}
              title="Projects"
              funMode={funMode}
              theme={theme}
            />

            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.title} className={innerCardClass}>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className={`text-xl font-semibold ${headingClass}`}>
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <span className={pillClass}>{project.subtitle}</span>
                    )}
                  </div>

                  <ul className={`space-y-2 ${mutedTextClass}`}>
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className={bulletDotClass} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={cardClass}>
            <SectionHeader
              icon={BriefcaseBusiness}
              title="Employment Experience"
              funMode={funMode}
              theme={theme}
            />

            <div className="space-y-6">
              {experience.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className={`border-l pl-5 ${
                    funMode
                      ? 'border-white/40'
                      : isDark
                        ? 'border-emerald-400/30'
                        : 'border-emerald-300'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className={`text-xl font-semibold ${headingClass}`}>
                        {job.company}, {job.role}
                      </h3>

                      <p className={`text-sm ${subtleTextClass}`}>
                        {job.location}
                        {job.subtitle ? ` • ${job.subtitle}` : ''}
                      </p>
                    </div>

                    <p className={pillClass}>{job.date}</p>
                  </div>

                  <ul className={`mt-4 space-y-2 ${mutedTextClass}`}>
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className={bulletDotClass} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}