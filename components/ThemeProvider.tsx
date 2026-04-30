"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme)
      return
    }

    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches
    setTheme(prefersLight ? "light" : "dark")
  }, [])

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark"
      window.localStorage.setItem("theme", nextTheme)
      document.documentElement.dataset.theme = nextTheme
      return nextTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }

  return context
}