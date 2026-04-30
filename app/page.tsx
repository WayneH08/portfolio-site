"use client"

import { useFunMode } from "@/components/FunModeProvider"

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ResumeSection from "@/components/ResumeSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const { funMode } = useFunMode()

  return (
    <main
      className={`min-h-screen transition-all duration-500 ${
        funMode
          ? "bg-gradient-to-br from-red-500 via-yellow-300 via-blue-500 to-green-500 text-white"
          : "bg-slate-950 text-white"
      }`}
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}