'use client'

import { ArrowRight, Plus } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { services } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, FadeUp, MaskHeading } from './ui/Reveal'

export default function Services() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-paper">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-28 md:px-10 md:py-36 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>What we do</Eyebrow>
          <MaskHeading
            id="services-title"
            className="mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)]"
            lines={['Six disciplines,', <>one <Accent>partner.</Accent></>]}
          />
          <FadeUp delay={0.2} className="mt-8 max-w-sm text-base leading-relaxed text-ink-soft">
            Choose one focused service or combine them into a single roadmap. Either way, one team owns the result.
          </FadeUp>
          <FadeUp delay={0.3} className="mt-8">
            <Link href="/services" className="group inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-[15px] font-medium transition-colors hover:border-ink">
              Explore all services
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        <ul className="border-b border-ink/10">
          {services.map((s, i) => {
            const isOpen = open === i
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
                className="border-t border-ink/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-${i}`}
                  className="group flex w-full cursor-pointer items-center gap-6 py-7 text-left"
                >
                  <span className="w-7 font-serif text-sm italic text-sky">0{i + 1}</span>
                  <span className="flex-1 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium tracking-[-0.03em] transition-transform duration-500 ease-expo group-hover:translate-x-2">
                    {s.title}
                  </span>
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-expo ${
                      isOpen ? 'rotate-45 border-ink bg-ink text-paper' : 'border-ink/15 text-ink group-hover:border-ink'
                    }`}
                  >
                    <Plus aria-hidden className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-9 md:grid-cols-[1.1fr_1fr] md:pl-[3.25rem]">
                        <p className="max-w-md text-[17px] leading-relaxed text-ink-soft">{s.summary}</p>
                        <ul className="space-y-2.5 text-[15px]">
                          {s.includes.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[0.6em] h-1 w-3 shrink-0 bg-sky" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 md:col-span-2">
                          {s.deliverables.map((d) => (
                            <span key={d} className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-medium text-ink-soft">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
