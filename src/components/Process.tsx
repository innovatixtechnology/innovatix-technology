'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { process } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, MaskHeading } from './ui/Reveal'

export default function Process() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" aria-labelledby="process-title" className="relative bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <MaskHeading
              id="process-title"
              className="mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)]"
              lines={['A clear path from', <>idea to <Accent>launch.</Accent></>]}
            />
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft">
            Five steps, no surprises. You always know what is happening, what is next and why.
          </p>
        </div>

        <ol ref={ref} className="relative mt-20 grid gap-12 md:grid-cols-5 md:gap-8">
          {/* progress line: vertical on mobile, horizontal on desktop */}
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-ink/10 md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto" />
          <motion.span
            aria-hidden
            style={{ scaleY: line }}
            className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-ink md:hidden"
          />
          <motion.span
            aria-hidden
            style={{ scaleX: line }}
            className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-ink md:block"
          />

          {process.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="relative pl-12 md:pl-0 md:pt-14"
            >
              <span className="absolute left-0 top-0 grid h-[23px] w-[23px] place-items-center rounded-full border border-ink bg-paper-2">
                <span className="h-2 w-2 rounded-full bg-sky" />
              </span>
              <span className="font-serif text-sm italic text-sky">0{i + 1}</span>
              <h3 className="mt-2 font-display text-[1.75rem] font-medium tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
