"use client"

import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"
import MarmosetEasterEgg from '@/components/MarmosetEasterEgg'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ResumeSection from "@/components/ResumeSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  return (
    <main
      className={`min-h-screen transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
        funMode
          ? "fun-mode-gradient text-white"
          : theme === "dark"
            ? "bg-[#0f2419] text-emerald-50"
            : "bg-[#f4fbf6] text-[#102018]"
      }`}
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <MarmosetEasterEgg />
    </main>
  )
}