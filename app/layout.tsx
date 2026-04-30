import type { Metadata } from "next"
import "./globals.css"
import { FunModeProvider } from "@/components/FunModeProvider"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Wayne Halliburton Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FunModeProvider>
          <Navbar />
          {children}
        </FunModeProvider>
      </body>
    </html>
  )
}