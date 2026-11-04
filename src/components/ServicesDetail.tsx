'use client'

import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import { engagements } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, FadeUp, MaskHeading } from './ui/Reveal'

/** Three ways to work together. */
export function Engagements() {
  return (
    <section aria-labelledby="engagements-title" className="relative bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Ways to work with us</Eyebrow>
            <MaskHeading
              id="engagements-title"
              className="mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)]"
              lines={['Pick the level of', <>support you <Accent>need.</Accent></>]}
            />
          </div>
          <FadeUp delay={0.2} className="max-w-sm text-base leading-relaxed text-ink-soft">
            Start with a single project or bring us in as an ongoing partner. You can move between them as you grow.
          </FadeUp>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {engagements.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className={`flex flex-col rounded-[24px] p-8 md:p-10 ${i === 1 ? 'bg-ink text-paper' : 'bg-white ring-1 ring-ink/[0.06]'}`}
            >
              <span className={`font-serif text-sm italic ${i === 1 ? 'text-sky' : 'text-sky'}`}>0{i + 1}</span>
              <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em]">{e.name}</h3>
              <p className={`mt-4 text-[15px] leading-relaxed ${i === 1 ? 'text-paper/65' : 'text-ink-soft'}`}>{e.text}</p>
              <ul className={`mt-8 space-y-2.5 border-t pt-6 text-[15px] ${i === 1 ? 'border-paper/15' : 'border-ink/10'}`}>
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
