export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Wayne Halliburton
        </a>

        <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#resume" className="transition hover:text-white">Resume</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}