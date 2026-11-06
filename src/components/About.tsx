'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { stats } from '../lib/content'
import { Eyebrow, FadeUp } from './ui/Reveal'

const STATEMENT =
  'We are partners, not vendors. We bridge the gap between business goals and technical execution, combining strategy, design, engineering, AI and growth so your digital products succeed in the real world.'

/** Words brighten one by one as the paragraph scrolls through the viewport. */
function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total
  const opacity = useTransform(progress, [start, start + 1 / total], [0.14, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {word}
    </motion.span>
  )
}

/** Homepage statement and numbers, with a link to the team page. */
export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = STATEMENT.split(' ')

  return (
    <section id="about" aria-label="About Innovatix" className="relative bg-paper">
      <div className={`mx-auto max-w-[1400px] px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36`}>
        <Eyebrow>About Innovatix</Eyebrow>
        <p
          ref={ref}
          className="mt-8 max-w-[22ch] font-display text-[clamp(2rem,4.8vw,4.6rem)] font-medium leading-[1.06] tracking-[-0.035em] sm:max-w-[26ch]"
        >
          <span className="sr-only">{STATEMENT}</span>
          <span aria-hidden>
            {words.map((w, i) => (
              <Word key={i} word={w} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </span>
        </p>

        <div className="mt-20 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1} className="border-l border-ink/10 pl-4 md:pl-6">
              <div className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.05em]">{s.value}</div>
              <div className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft md:text-sm">{s.label}</div>
            </FadeUp>
          ))}
        </div>

          <FadeUp delay={0.2} className="mt-16">
            <Link href="/about#team" className="group inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[15px] font-medium transition-colors hover:border-ink">
              Meet the team
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
            </Link>
          </FadeUp>
      </div>
    </section>
  )
}
