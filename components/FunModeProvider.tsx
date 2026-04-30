"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "@/components/ThemeProvider"

type FunModeContextType = {
  funMode: boolean
  toggleFunMode: () => void
}

const FunModeContext = createContext<FunModeContextType | undefined>(undefined)

export function FunModeProvider({ children }: { children: React.ReactNode }) {
  const [funMode, setFunMode] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const savedFunMode = window.localStorage.getItem("funMode")

    if (savedFunMode === "true") {
      setFunMode(true)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("funMode", String(funMode))
    document.documentElement.dataset.funMode = String(funMode)

    const pageBg = funMode
      ? "linear-gradient(135deg, #ef4444, #facc15, #3b82f6, #22c55e)"
      : theme === "dark"
        ? "#0b2418"
        : "#f7faf7"

    const pageText = funMode
      ? "#ffffff"
      : theme === "dark"
        ? "#ffffff"
        : "#102018"

    document.documentElement.style.setProperty("--page-bg", pageBg)
    document.documentElement.style.setProperty("--page-text", pageText)
    document.documentElement.style.background = pageBg
    document.body.style.background = pageBg
    document.body.style.color = pageText
  }, [funMode, theme])

  function toggleFunMode() {
    setFunMode((prev) => !prev)
  }

  return (
    <FunModeContext.Provider value={{ funMode, toggleFunMode }}>
      <div
        className="min-h-screen transition-all duration-700 ease-in-out"
        style={{
          background: "var(--page-bg)",
          color: "var(--page-text)",
          fontFamily: funMode
            ? '"Comic Sans MS", Papyrus, fantasy, cursive, sans-serif'
            : "inherit",
        }}
      >
        {funMode && (
          <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-25">
            <div className="absolute left-8 top-24 text-6xl">🎈</div>
            <div className="absolute right-10 top-32 text-6xl">🌈</div>
            <div className="absolute left-1/4 top-1/2 text-5xl">⭐</div>
            <div className="absolute bottom-24 left-16 text-6xl">🎮</div>
            <div className="absolute bottom-32 right-24 text-6xl">🛸</div>
            <div className="absolute right-1/3 top-24 text-5xl">✨</div>
          </div>
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </FunModeContext.Provider>
  )
}

export function useFunMode() {
  const context = useContext(FunModeContext)

  if (!context) {
    throw new Error("useFunMode must be used inside FunModeProvider")
  }

  return context
}