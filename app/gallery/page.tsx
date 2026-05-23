"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useFunMode } from "@/components/FunModeProvider"
import { useTheme } from "@/components/ThemeProvider"

const artworks = [
  {
    title: "Chair in the Stream",
    category: "Gouache Painting",
    year: "2023",
    medium: "Gouache on paper",
    image: "/assets/gallery/chair-stream-painting.jpg",
    description:
      "A surreal nature scene featuring a lone chair placed in a rushing stream, surrounded by rocks, trees, and layered green forest textures.",
  },
]

export default function GalleryPage() {
  const { funMode } = useFunMode()
  const { theme } = useTheme()

  const isDark = theme === "dark"

  const pageClass = funMode
    ? "fun-mode-gradient text-white"
    : isDark
      ? "bg-[#06150f] text-white"
      : "bg-[#f6fbf2] text-[#102018]"

  const eyebrowClass = funMode || isDark ? "text-emerald-200" : "text-emerald-700"

  const paragraphClass = funMode || isDark ? "text-white/75" : "text-[#355645]"

  const mutedTextClass = funMode || isDark ? "text-white/55" : "text-[#5d7668]"

  const cardClass =
    funMode || isDark
      ? "border-white/15 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur"
      : "border-emerald-200/80 bg-white/85 shadow-xl shadow-emerald-900/10 backdrop-blur"

  const featureClass =
    funMode || isDark
      ? "border-white/15 bg-black/20 shadow-2xl shadow-black/30"
      : "border-emerald-200/80 bg-white/90 shadow-2xl shadow-emerald-900/10"

  return (
    <main className={`min-h-screen px-6 py-28 transition-colors duration-500 ${pageClass}`}>
      <section className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${eyebrowClass}`}>
              Artwork
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Art Gallery
            </h1>

            <p className={`max-w-2xl text-lg leading-8 ${paragraphClass}`}>
              Collection of random traditional paintings, sketches, studies,
              and visual arts projects. in this gallery i'll eventually showcase my
              work, projects notes/comments, medium details, etc.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className={`rounded-3xl border p-6 ${cardClass}`}
          >
            <p className={`mb-2 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}>
              Featured Piece
            </p>
            <h2 className="text-2xl font-bold">Chair in the Stream</h2>
            <p className={`mt-3 leading-7 ${paragraphClass}`}>
              Gouache painting exploring quiet surrealism, natural motion, and
              contrast between handmade structure and organic landscape.
            </p>
          </motion.div>
        </div>

        {/* FEATURED ARTWORK */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`overflow-hidden rounded-[2rem] border ${featureClass}`}
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[420px] bg-black/10 md:min-h-[620px]">
              <Image
                src="/assets/gallery/chair-stream-painting.jpg"
                alt="Gouache painting of a wooden chair sitting in a stream surrounded by rocks and forest trees."
                fill
                priority
                className="object-contain p-4 md:p-8"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
                Gouache Painting
              </p>

              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Chair in the Stream
              </h2>

              <p className={`mb-8 text-lg leading-8 ${paragraphClass}`}>
                A lone wooden chair rests in the center of rushing water,
                surrounded by rocks and dense forest. The goal was to capture a dreamlike,
                storybook quality, balancing peaceful nature with an
                everyday object placed where it does not quite belong.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${mutedTextClass}`}>
                    Medium
                  </p>
                  <p className="mt-2 font-semibold">Gouache</p>
                </div>

                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${mutedTextClass}`}>
                    Type
                  </p>
                  <p className="mt-2 font-semibold">Traditional</p>
                </div>

                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${mutedTextClass}`}>
                    Year
                  </p>
                  <p className="mt-2 font-semibold">2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* COLLECTION GRID */}
        <section className="mt-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}>
                Collection
              </p>
              <h2 className="text-4xl font-bold">Selected Works</h2>
            </div>

            <p className={`max-w-xl leading-7 ${paragraphClass}`}>
              More paintings, sketches, digital studies, and process images can
              be added here as the portfolio grows.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {artworks.map((artwork) => (
              <motion.div
                key={artwork.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 ${cardClass}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black/10">
                  <Image
                    src={artwork.image}
                    alt={`${artwork.title}, ${artwork.medium}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}>
                      {artwork.category}
                    </p>
                    <p className={`text-sm ${mutedTextClass}`}>{artwork.year}</p>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">{artwork.title}</h3>

                  <p className={`mb-5 leading-7 ${paragraphClass}`}>
                    {artwork.description}
                  </p>

                  <p className={`text-sm font-medium ${mutedTextClass}`}>
                    {artwork.medium}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className={`flex min-h-[420px] flex-col justify-center rounded-3xl border border-dashed p-8 ${cardClass}`}>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}>
                Coming Soon
              </p>
              <h3 className="mb-3 text-2xl font-bold">More Traditional Work</h3>
              <p className={`leading-7 ${paragraphClass}`}>
                Future paintings, sketchbook pages, studies, and process shots
                will be added here .
              </p>
            </div>

            <div className={`flex min-h-[420px] flex-col justify-center rounded-3xl border border-dashed p-8 ${cardClass}`}>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${eyebrowClass}`}>
                Coming Soon
              </p>
              <h3 className="mb-3 text-2xl font-bold">Digital Experiments</h3>
              <p className={`leading-7 ${paragraphClass}`}>
                This space will hold my digital illustrations, animation frames,
                visual studies, and mixed media stuff ;-P.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}