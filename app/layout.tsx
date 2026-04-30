import type { Metadata } from "next"
import "./globals.css"
import { FunModeProvider } from "@/components/FunModeProvider"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Wayne Halliburton Portfolio",
  description: "Personal portfolio website",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <FunModeProvider>
            <Navbar />
            {children}
          </FunModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}