import { Mail, Phone, ExternalLink } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const contactLinks = [
  {
    label: "Email",
    value: "whalliburton18@gmail.com",
    href: "mailto:whalliburton18@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(512) 516-9703",
    href: "tel:5125169703",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/WayneH08",
    href: "https://github.com/WayneH08",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/wayne-halliburton-1228312b2/",
    href: "https://www.linkedin.com/in/wayne-halliburton-1228312b2/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram — Personal",
    value: "@w4yn38urt0n",
    href: "https://www.instagram.com/w4yn38urt0n/",
    icon: FaInstagram,
  },
  {
    label: "Instagram — Creative",
    value: "@m0o053",
    href: "https://www.instagram.com/m0o053/",
    icon: FaInstagram,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Whether it&apos;s a project, opportunity, collaboration, or just a quick
          hello, feel free to reach out through any of the links below.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((item) => {
          const Icon = item.icon
          const isExternal = item.href.startsWith("http")

          return (
            <a
              key={item.label}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-400/10"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-slate-950">
                  <Icon size={24} />
                </div>

                {isExternal && (
                  <ExternalLink
                    size={18}
                    className="text-slate-500 transition-colors duration-300 group-hover:text-emerald-300"
                  />
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.label}
              </h3>

              <p className="break-words text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                {item.value}
              </p>
            </a>
          )
        })}
      </div>
    </section>
  )
}