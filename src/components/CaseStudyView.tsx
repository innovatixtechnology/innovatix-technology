'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { caseStudies, getCaseStudy } from '../lib/caseStudies'
import { ease } from '../lib/motion'
import CtaBand from './CtaBand'
import { Lightbox } from './Portfolio'
import { FadeUp } from './ui/Reveal'

type Image = { src: string; alt: string }

/** One large image at a time; thumbnails below switch between a section's images, click opens full size. */
function Viewer({ images, alt, onOpen }: { images: string[]; alt: string; onOpen: (img: Image) => void }) {
  const [active, setActive] = useState(0)
  const many = images.length > 1
  const go = (d: number) => setActive((a) => (a + d + images.length) % images.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease }}
    >
      <div className="relative overflow-hidden rounded-[20px] bg-white p-2 ring-1 ring-ink/[0.06] md:p-3">
        <button
          type="button"
          onClick={() => onOpen({ src: images[active], alt })}
          aria-label={`Enlarge: ${alt}`}
          className="group relative block aspect-[4/3] w-full md:aspect-auto md:h-[min(62vh,620px)] cursor-zoom-in overflow-hidden rounded-[14px] bg-paper/60"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={images[active]}
              src={images[active]}
              alt={alt}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </AnimatePresence>
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Maximize2 aria-hidden className="h-4 w-4" />
          </span>
        </button>
        {many && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-5 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-paper/90 text-ink shadow-sm ring-1 ring-ink/10 transition-colors hover:bg-ink hover:text-paper"
            >
              <ChevronLeft aria-hidden className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-5 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-paper/90 text-ink shadow-sm ring-1 ring-ink/10 transition-colors hover:bg-ink hover:text-paper"
            >
              <ChevronRight aria-hidden className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {many && (
        <div className="mt-4 flex items-center gap-3">
          {images.map((src, k) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(k)}
              aria-label={`Show image ${k + 1} of ${images.length}`}
              aria-current={k === active}
              className={`h-14 w-20 cursor-pointer overflow-hidden rounded-lg bg-white p-1 ring-1 transition-all duration-300 md:h-16 md:w-24 ${
                k === active ? 'opacity-100 ring-2 ring-ink' : 'opacity-50 ring-ink/10 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
            </button>
          ))}
          <span className="ml-auto text-sm tabular-nums text-ink-soft">
            {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function CaseStudyView({ slug }: { slug: string }) {
  const study = getCaseStudy(slug)!
  const index = caseStudies.findIndex((c) => c.slug === slug)
  const others = caseStudies.filter((c) => c.slug !== slug)
  const [image, setImage] = useState<Image | null>(null)
  const close = useCallback(() => setImage(null), [])

  return (
    <>
      <header className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-36 md:px-10 md:pt-44">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink">
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-x-1" />
              All case studies
            </Link>
          </motion.div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">
              Case study {String(index + 1).padStart(2, '0')} · {study.client}
            </p>
            <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.4rem,5vw,4.75rem)] font-medium leading-[1] tracking-[-0.05em]">
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span className="block" initial={{ y: '105%' }} animate={{ y: '0%' }} transition={{ duration: 1.1, delay: 0.1, ease }}>
                  {study.title}
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft"
            >
              {study.intro}
            </motion.p>
            {study.url && (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[15px] font-medium transition-colors hover:border-ink"
              >
                Visit the live site
                <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
              </motion.a>
            )}
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="mt-14 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3"
          >
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Client</dt>
              <dd className="mt-2 text-[17px]">{study.client}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Industry</dt>
              <dd className="mt-2 text-[17px]">{study.industry}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">What we did</dt>
              <dd className="mt-2 text-[17px]">{study.services.join(', ')}</dd>
            </div>
          </motion.dl>
        </div>
      </header>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
          {study.results && (
            <div className="grid grid-cols-2 gap-4 border-t border-ink/10 py-16 md:grid-cols-4">
              {study.results.map((r) => (
                <FadeUp key={r.label}>
                  <div className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.05em]">{r.value}</div>
                  <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">{r.label}</div>
                </FadeUp>
              ))}
            </div>
          )}

          {study.sections.map((sec, i) => (
            <article key={sec.heading} className="grid gap-8 border-t border-ink/10 py-12 md:py-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-14">
              <FadeUp className="lg:sticky lg:top-28 lg:self-start">
                <span className="font-serif text-sm italic text-sky">0{i + 1}</span>
                <h2 className="mt-3 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-medium leading-[1.05] tracking-[-0.04em]">{sec.heading}</h2>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">{sec.text}</p>
              </FadeUp>
              <Viewer images={sec.images} alt={`${study.client}: ${sec.heading}`} onOpen={setImage} />
            </article>
          ))}
          <p className="border-t border-ink/10 pt-6 text-sm text-ink-soft">Click any image to view it full size.</p>
        </div>
      </section>

      <section aria-labelledby="more-cases" className="bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
          <h2 id="more-cases" className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
            More case studies
          </h2>
          <ul className="mt-8 border-t border-ink/10">
            {others.map((c) => (
              <li key={c.slug} className="border-b border-ink/10">
                <Link href={`/work/${c.slug}`} className="group flex items-center gap-5 py-6 md:gap-8">
                  <span className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-ink/[0.06] sm:block">
                    <img src={c.cover} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky">{c.client}</span>
                    <span className="mt-1 block font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-medium leading-tight tracking-[-0.03em] transition-transform duration-500 ease-expo group-hover:translate-x-2">
                      {c.title}
                    </span>
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox image={image} onClose={close} />
      <CtaBand />
    </>
  )
}
