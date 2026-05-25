"use client"

import { useEffect, useRef, useState } from "react"

type TrailPiece = {
  x: number
  y: number
  life: number
  id: number
}

export default function CRTCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailContainerRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          window.matchMedia("(pointer: coarse)").matches
      )
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const cursor = cursorRef.current
    const trailContainer = trailContainerRef.current

    if (!cursor || !trailContainer) return

    let mouseX = 0
    let mouseY = 0

    let cursorX = 0
    let cursorY = 0

    let trail: TrailPiece[] = []

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      trail.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        id: Math.random(),
      })

      if (trail.length > 12) {
        trail.shift()
      }
    }

    window.addEventListener("mousemove", move)

    let animationFrame: number

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.28
      cursorY += (mouseY - cursorY) * 0.28

      cursor.style.transform = `
        translate3d(${cursorX}px, ${cursorY}px, 0)
      `

      trail.forEach((piece) => {
        piece.life -= 0.05
      })

      trail = trail.filter((piece) => piece.life > 0)

      trailContainer.innerHTML = ""

      trail.forEach((piece) => {
        const el = document.createElement("div")

        el.style.position = "fixed"
        el.style.left = `${piece.x}px`
        el.style.top = `${piece.y}px`

        el.style.width = "28px"
        el.style.height = "28px"

        el.style.marginLeft = "-4px"
        el.style.marginTop = "-2px"

        el.style.pointerEvents = "none"

        el.style.backgroundImage = "url('/assets/hand.png')"
        el.style.backgroundSize = "contain"
        el.style.backgroundRepeat = "no-repeat"
        el.style.backgroundPosition = "center"

        el.style.opacity = String(piece.life * 0.35)

        el.style.filter = `
          blur(${(1 - piece.life) * 4}px)
        `

        el.style.transform = `
          scale(${0.8 + piece.life * 0.3})
          rotate(${(1 - piece.life) * 8}deg)
        `

        trailContainer.appendChild(el)
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(animationFrame)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* TRAIL */}
      <div
        ref={trailContainerRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
      />

      {/* MAIN CURSOR */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          width: "30px",
          height: "30px",

          marginLeft: "-4px",
          marginTop: "-2px",

          backgroundImage: "url('/assets/hand.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          transform: "translate3d(0,0,0)",
          willChange: "transform",
        }}
      />
    </>
  )
}