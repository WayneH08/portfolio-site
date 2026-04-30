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

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    var funMode = localStorage.getItem("funMode");

    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    var pageBg =
      funMode === "true"
        ? "linear-gradient(135deg, #ef4444, #facc15, #3b82f6, #22c55e)"
        : theme === "dark"
          ? "#0b2418"
          : "#f7faf7";

    var pageText =
      funMode === "true"
        ? "#ffffff"
        : theme === "dark"
          ? "#ffffff"
          : "#102018";

    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.funMode = String(funMode === "true");
    document.documentElement.style.setProperty("--page-bg", pageBg);
    document.documentElement.style.setProperty("--page-text", pageText);
    document.documentElement.style.background = pageBg;
  } catch (error) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body
        style={{
          background: "var(--page-bg)",
          color: "var(--page-text)",
        }}
      >
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