'use client'

import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'
import { caseStudies } from '../lib/caseStudies'
import { featuredProjects, type Project } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, MaskHeading } from './ui/Reveal'
import DarkSection from './ui/DarkSection'

/** Websites shown on the homepage; the full list stays on the portfolio page. */
const homeProjects = featuredProjects.filter((p) => p.name !== 'HeyBuds')

function BrowserShot({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[10px] bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10 ${className}`}>
      <div className="flex h-7 items-center gap-1.5 bg-[#ececea] px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="mx-auto truncate rounded bg-white px-4 text-[10px] text-ink-soft">{project.host}</span>
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
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
      <BrowserShot project={project} />
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-sm italic text-sky">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] font-medium tracking-[-0.03em]">{project.name}</h3>
          </div>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-paper/60">{project.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[project.category, ...project.tags].map((t) => (
              <span key={t} className="rounded-full border border-paper/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-paper/70">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/20 transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
          <ArrowUpRight aria-hidden className="h-4 w-4" />
          <span className="sr-only">Visit {project.name}</span>
        </span>
      </div>
    </a>
  )
}

/** Desktop: cards travel sideways while the section is pinned. */
function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={sectionRef} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-16 pl-10 pr-[12vw] xl:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
          <div className="flex w-[30vw] max-w-[440px] shrink-0 flex-col justify-center">
            <Eyebrow tone="dark">Selected work</Eyebrow>
            <MaskHeading
              className="mt-6 text-[clamp(2.6rem,4.6vw,4.6rem)] text-paper"
              lines={['Projects built', <>for <Accent>real</Accent> brands.</>]}
            />
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-paper/60">
              Websites, stores and platforms we have designed and built. Scroll to browse, click to visit.
            </p>
          </div>
          {homeProjects.map((p, i) => (
            <div key={p.name} className="w-[46vw] max-w-[760px] shrink-0">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
          <ViewAllCard />
        </motion.div>
        <div className="mx-auto mt-12 h-px w-[min(1320px,90vw)] bg-paper/10">
          <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-sky" />
        </div>
      </div>
    </div>
  )
}

function ViewAllCard() {
  return (
    <Link
      href="/work"
      className="group flex w-[26vw] max-w-[380px] shrink-0 flex-col justify-center rounded-[24px] border border-paper/15 p-10 transition-colors duration-500 hover:bg-paper hover:text-ink"
    >
      <span className="font-serif text-sm italic text-sky">All projects</span>
      <span className="mt-4 font-display text-4xl font-medium leading-[1] tracking-[-0.04em]">
        Websites, brands, campaigns &amp; more
      </span>
      <span className="mt-10 grid h-14 w-14 place-items-center rounded-full border border-current transition-transform duration-500 ease-expo group-hover:translate-x-2">
        <ArrowRight aria-hidden className="h-5 w-5" />
      </span>
    </Link>
  )
}

/** Mobile & tablet: simple vertical stack. */
function StackedGallery() {
  return (
    <div className="px-6 pt-28 md:px-10 lg:hidden">
      <Eyebrow tone="dark">Selected work</Eyebrow>
      <MaskHeading className="mt-6 text-[clamp(2.4rem,7vw,4rem)] text-paper" lines={['Projects built', <>for <Accent>real</Accent> brands.</>]} />
      <div className="mt-14 space-y-16">
        {homeProjects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
          >
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </div>
      <Link href="/work" className="group mt-16 inline-flex items-center gap-3 border-b border-paper/25 pb-2 text-[15px] font-medium">
        View all work
        <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

/** Homepage: featured websites in a pinned sideways gallery. */
export default function FeaturedWork() {
  return (
    <DarkSection id="work" aria-label="Selected work" className="pb-24 lg:pb-0">
      <HorizontalGallery />
      <StackedGallery />
    </DarkSection>
  )
}

/** Case study cards, linking to /work/<slug>. */
export function CaseStudyCards({ exclude }: { exclude?: string }) {
  const list = caseStudies.filter((c) => c.slug !== exclude)
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: i * 0.1, ease }}
        >
          <Link href={`/work/${c.slug}`} className="group block">
            <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-white ring-1 ring-ink/[0.06]">
              <img
                src={c.cover}
                alt={`${c.client} case study`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.05]"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{c.client}</p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-0.03em]">{c.title}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{c.services.join(' · ')}</p>
              </div>
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <ArrowRight aria-hidden className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
