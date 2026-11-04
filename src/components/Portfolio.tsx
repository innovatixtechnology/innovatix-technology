'use client'

import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { featuredProjects, moreProjects, type Project } from '../lib/content'
import { ease } from '../lib/motion'
import { filters, pieces, type FilterKey, type Piece } from '../lib/portfolio'

type Item = { kind: 'site'; project: Project } | { kind: 'piece'; piece: Piece }
type Open = (src: string, alt: string) => void

const sites: Item[] = [...featuredProjects, ...moreProjects].map((project) => ({ kind: 'site', project }))
const byCategory = (key: FilterKey): Item[] =>
  key === 'websites' ? sites : pieces.filter((p) => p.category === key).map((piece) => ({ kind: 'piece', piece }))

/** "All" deals one item from each type in turn, so websites, brands and print stay mixed. */
const groups = filters.filter((f) => f.key !== 'all').map((f) => byCategory(f.key))
const mixed: Item[] = Array.from({ length: Math.max(...groups.map((g) => g.length)) }).flatMap((_, i) =>
  groups.flatMap((g) => (g[i] ? [g[i]] : [])),
)
const itemsFor = (key: FilterKey) => (key === 'all' ? mixed : byCategory(key))

function SiteCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-ink/[0.07] transition-shadow duration-500 group-hover:shadow-[0_24px_50px_-28px_rgba(11,26,58,0.35)]">
        <div className="overflow-hidden rounded-lg ring-1 ring-ink/[0.06]">
          <div className="flex h-5 items-center gap-1 bg-[#ececea] px-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
            <span className="mx-auto truncate text-[9px] text-ink-soft">{project.host}</span>
          </div>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} website by Innovatix`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 flex items-start justify-between gap-4">
        <span>
          <span className="block font-display text-[17px] font-medium tracking-[-0.02em]">{project.name}</span>
          <span className="mt-0.5 block text-sm text-ink-soft">Website · {project.category}</span>
        </span>
        <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-sm text-ink-soft transition-colors group-hover:text-ink">
          Live site
          <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
        </span>
      </figcaption>
    </a>
  )
}

function PieceCard({ piece, onOpen }: { piece: Piece; onOpen: Open }) {
  const alt = `${piece.client}: ${piece.what}`
  return (
    <>
      <button
        type="button"
        onClick={() => onOpen(piece.src, alt)}
        aria-label={`Enlarge: ${alt}`}
        className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-ink/[0.07] transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(11,26,58,0.35)]"
      >
        <span className="block overflow-hidden rounded-lg">
          <img src={piece.src} alt={alt} loading="lazy" className="w-full transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.03]" />
        </span>
      </button>
      <figcaption className="mt-4 flex items-start justify-between gap-4">
        <span>
          <span className="block font-display text-[17px] font-medium tracking-[-0.02em]">{piece.client}</span>
          <span className="mt-0.5 block text-sm text-ink-soft">{piece.what}</span>
        </span>
        {piece.caseStudy && (
          <Link
            href={`/work/${piece.caseStudy}`}
            className="group/cs mt-0.5 inline-flex shrink-0 items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Case study
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover/cs:translate-x-0.5" />
          </Link>
        )}
      </figcaption>
    </>
  )
}

/** Portfolio page: every website and piece of marketing work in one filterable grid. */
export default function Portfolio() {
  const [active, setActive] = useState<FilterKey>('all')
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null)
  const items = itemsFor(active)
  const open: Open = (src, alt) => setImage({ src, alt })

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
      <div
        role="tablist"
        aria-label="Filter work"
        className="flex flex-wrap gap-2 border-t border-ink/10 pt-8"
      >
        {filters.map((f) => {
          const selected = f.key === active
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="portfolio-grid"
              onClick={() => setActive(f.key)}
              className={`relative shrink-0 cursor-pointer rounded-full px-3.5 py-2 text-[13px] font-medium ring-1 sm:px-5 sm:py-2.5 sm:text-sm transition-colors duration-300 ${
                selected ? 'text-paper ring-ink' : 'text-ink-soft ring-ink/15 hover:text-ink hover:ring-ink/40'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                {f.label}
                <sup className="ml-1 text-[10px] tabular-nums opacity-60">{itemsFor(f.key).length}</sup>
              </span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id="portfolio-grid"
          role="tabpanel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          // Websites share one size, so they fill rows left to right; mixed work flows as masonry.
          className={`mt-12 gap-x-6 lg:gap-x-8 ${active === 'websites' ? 'grid sm:grid-cols-2 lg:grid-cols-3' : 'gap-y-6 sm:columns-2 lg:columns-3'}`}
        >
          {items.map((item, i) => (
            <motion.figure
              key={item.kind === 'site' ? item.project.url : item.piece.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: Math.min(i, 6) * 0.05, ease }}
              className="mb-12 break-inside-avoid"
            >
              {item.kind === 'site' ? <SiteCard project={item.project} /> : <PieceCard piece={item.piece} onOpen={open} />}
            </motion.figure>
          ))}
        </motion.div>
      </AnimatePresence>

      <Link
        href="/contact"
        className="group mt-8 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[15px] font-medium transition-colors hover:border-ink"
      >
        Want this for your brand? Let&rsquo;s talk
        <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
      </Link>

      <Lightbox image={image} onClose={() => setImage(null)} />
    </div>
  )
}

export function Lightbox({ image, onClose }: { image: { src: string; alt: string } | null; onClose: () => void }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  if (!isClient) return null

  return createPortal(
    <AnimatePresence>
      {image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center bg-ink/90 p-4 backdrop-blur-sm md:p-10"
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="max-h-full max-w-full rounded-xl bg-white object-contain p-2 shadow-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-paper text-ink"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
