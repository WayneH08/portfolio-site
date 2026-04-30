'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useFunMode } from '@/components/FunModeProvider'
import { useTheme } from '@/components/ThemeProvider'

export default function MarmosetEasterEgg() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const [isPeeking, setIsPeeking] = useState(false)
  const [peekPosition, setPeekPosition] = useState<'top' | 'bottom'>('bottom')
  const [showHint, setShowHint] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastZoneRef = useRef<'top' | 'bottom' | null>(null)
  const lastScrollYRef = useRef(0)
  const hasScrolledAwayFromTopRef = useRef(false)
  const userHasActuallyScrolledRef = useRef(false)

  useEffect(() => {
    lastScrollYRef.current = window.scrollY

    function markUserScrollIntent() {
      userHasActuallyScrolledRef.current = true
    }

    function showHintTemporarily() {
      setShowHint(true)

      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current)
      }

      hintTimerRef.current = setTimeout(() => {
        setShowHint(false)
      }, 2800)
    }

    function hideMarmoset() {
      lastZoneRef.current = null
      setIsPeeking(false)
      setShowHint(false)

      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current)
      }
    }

    function handleScroll() {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const scrollingUp = currentScrollY < lastScrollYRef.current
      const nearTop = currentScrollY <= 70
      const nearBottom = currentScrollY + windowHeight >= documentHeight - 120

      /*
        This prevents the top marmoset from showing immediately on page load.
        The user has to actually scroll down the page first.
      */
      if (currentScrollY > 260) {
        hasScrolledAwayFromTopRef.current = true
      }

      /*
        Bottom marmoset:
        Keep this on the bottom right, exactly where you liked it.
      */
      if (nearBottom) {
        setPeekPosition('bottom')
        setIsPeeking(true)

        if (lastZoneRef.current !== 'bottom') {
          lastZoneRef.current = 'bottom'
          showHintTemporarily()
        }

        lastScrollYRef.current = currentScrollY
        return
      }

      /*
        Top marmoset:
        - Top left
        - Close to the browser/top edge
        - Does NOT appear on initial page load
        - Only appears after the user has scrolled down, then scrolls back up
      */
      if (
        nearTop &&
        scrollingUp &&
        hasScrolledAwayFromTopRef.current &&
        userHasActuallyScrolledRef.current
      ) {
        setPeekPosition('top')
        setIsPeeking(true)

        if (lastZoneRef.current !== 'top') {
          lastZoneRef.current = 'top'
          showHintTemporarily()
        }

        lastScrollYRef.current = currentScrollY
        return
      }

      hideMarmoset()
      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('wheel', markUserScrollIntent, { passive: true })
    window.addEventListener('touchmove', markUserScrollIntent, { passive: true })
    window.addEventListener('keydown', markUserScrollIntent)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', markUserScrollIntent)
      window.removeEventListener('touchmove', markUserScrollIntent)
      window.removeEventListener('keydown', markUserScrollIntent)
      window.removeEventListener('scroll', handleScroll)

      if (hintTimerRef.current) {
        clearTimeout(hintTimerRef.current)
      }
    }
  }, [])

  const bubbleClass = funMode
    ? 'border-white/25 bg-white/20 text-white backdrop-blur-xl'
    : theme === 'dark'
      ? 'border-emerald-400/20 bg-[#102318]/85 text-emerald-50 backdrop-blur-xl'
      : 'border-emerald-200 bg-white/85 text-emerald-950 backdrop-blur-xl'

  const popupClass = funMode
    ? 'border-white/25 bg-white/20 text-white backdrop-blur-2xl'
    : theme === 'dark'
      ? 'border-emerald-400/20 bg-[#102318]/95 text-emerald-50 backdrop-blur-2xl'
      : 'border-emerald-200 bg-white/95 text-emerald-950 backdrop-blur-2xl'

  return (
    <>
      <AnimatePresence>
        {isPeeking && (
          <motion.button
            type="button"
            aria-label="Open marmoset easter egg"
            onClick={() => setShowPopup(true)}
            initial={{
              opacity: 0,
              y: peekPosition === 'bottom' ? 90 : -90,
              rotate: peekPosition === 'bottom' ? 0 : 180,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: peekPosition === 'bottom' ? 0 : 180,
            }}
            exit={{
              opacity: 0,
              y: peekPosition === 'bottom' ? 90 : -90,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className={`fixed z-50 cursor-pointer border-0 bg-transparent p-0 outline-none ${
              peekPosition === 'bottom'
                ? 'bottom-0 right-4 md:right-8'
                : 'left-3 top-0 md:left-6 md:top-0'
            }`}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <Image
                src="/assets/easter-eggs/marmoset.png"
                alt="A pygmy marmoset peeking onto the page"
                width={190}
                height={150}
                priority={false}
                className={`select-none drop-shadow-2xl transition-transform duration-300 hover:scale-105 ${
                  peekPosition === 'top' ? 'origin-top' : 'origin-bottom'
                }`}
              />

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      x: peekPosition === 'bottom' ? 8 : -8,
                    }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.92,
                      x: peekPosition === 'bottom' ? 8 : -8,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`absolute rounded-2xl border px-4 py-2 text-xs font-medium shadow-xl ${bubbleClass} ${
                      peekPosition === 'bottom'
                        ? 'bottom-14 right-[105px] md:right-[135px]'
                        : 'left-[105px] top-14 rotate-180 md:left-[135px]'
                    }`}
                  >
                    click me!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              onClick={(event) => event.stopPropagation()}
              className={`relative max-w-md rounded-3xl border p-6 shadow-2xl ${popupClass}`}
            >
              <button
                type="button"
                aria-label="Close marmoset popup"
                onClick={() => setShowPopup(false)}
                className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <Image
                  src="/assets/easter-eggs/marmoset.png"
                  alt="A pygmy marmoset"
                  width={230}
                  height={180}
                  className="drop-shadow-2xl"
                />

                <h3 className="mt-5 text-2xl font-bold">Howdy!</h3>

                <p className="mt-3 text-base leading-7">
                  This is a Pygmy Marmoset, one of my favorite little creatures!
                </p>

                <p className="mt-3 text-sm opacity-80">
                  Tiny animal. Huge personality.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}