'use client'

import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import { services } from '../lib/content'
import { ease } from '../lib/motion'
import { FadeUp } from './ui/Reveal'

type Service = (typeof services)[number]

const marketing = services.filter((s) => s.group === 'Marketing')
const technology = services.filter((s) => s.group === 'Technology')
const number = (s: Service) => String(services.indexOf(s) + 1).padStart(2, '0')

/** One service; the "includes" list opens on hover (always open on touch screens). */
function SplitItem({ s, align }: { s: Service; align: 'left' | 'right' }) {
  return (
    <div className="group relative flex flex-1 flex-col justify-center border-t border-ink/10 py-10 md:py-12">
      <div className={`flex items-start gap-5 ${align === 'right' ? 'md:flex-row-reverse md:text-right' : ''}`}>
        <span className="mt-2 font-serif text-sm italic text-sky">{number(s)}</span>
        <div className="flex-1">
          <h3 className="font-display text-[clamp(2rem,3.4vw,3.2rem)] font-medium leading-[1] tracking-[-0.045em] transition-colors duration-500 group-hover:text-brand">
            {s.title}
          </h3>
          <p className={`mt-4 max-w-md text-[17px] leading-relaxed text-ink-soft ${align === 'right' ? 'md:ml-auto' : ''}`}>{s.pitch}</p>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-expo group-hover:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <ul className={`flex flex-wrap gap-x-5 gap-y-1.5 pt-5 text-[14px] text-ink/70 ${align === 'right' ? 'md:justify-end' : ''}`}>
                {s.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sky" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Plus
          aria-hidden
          className="mt-3 hidden h-5 w-5 shrink-0 text-ink/30 transition-transform duration-500 ease-expo group-hover:rotate-45 group-hover:text-ink md:block [@media(hover:none)]:hidden"
        />
      </div>
    </div>
  )
}

function SplitColumn({ label, line, list, from }: { label: string; line: string; list: Service[]; from: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, ease }}
      className="flex h-full flex-col"
    >
      <div className={`pb-10 ${from === 'right' ? 'md:text-right' : ''}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">{label}</p>
        <p className="mt-3 font-serif text-[clamp(1.4rem,2vw,1.8rem)] italic leading-snug text-ink">{line}</p>
      </div>
      <div className="flex flex-1 flex-col">
        {list.map((s) => (
          <SplitItem key={s.title} s={s} align={from} />
        ))}
      </div>
    </motion.div>
  )
}

/** Services split into Marketing and Technology, meeting at a centre line. */
export function ServicesSplit() {
  return (
    <section aria-label="Services" className="relative bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="relative grid gap-16 border-t border-ink/10 pt-14 md:grid-cols-2 md:gap-0">
          <div className="md:flex md:flex-col md:pr-14">
            <SplitColumn label="Marketing" line="Get noticed, trusted and chosen." list={marketing} from="left" />
          </div>
          <div className="md:flex md:flex-col md:pl-14">
            <SplitColumn label="Technology" line="Build the systems that keep you growing." list={technology} from="right" />
          </div>

          {/* the seam where the two sides meet */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease }}
            className="absolute bottom-0 left-1/2 top-14 hidden w-px origin-top bg-ink/15 md:block"
          />
          <motion.span
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="absolute left-1/2 top-14 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky ring-[6px] ring-paper md:block"
          />
        </div>

        <FadeUp className="mt-20 rounded-[28px] bg-ink px-8 py-14 text-center text-paper md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">Where they meet</p>
          <p className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.6rem,3vw,2.8rem)] font-medium leading-[1.15] tracking-[-0.035em]">
            A campaign needs a website that converts. An app needs a brand people trust. We build both, so nothing gets lost between agencies.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
