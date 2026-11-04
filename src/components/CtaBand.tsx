'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Accent, Eyebrow, FadeUp, MaskHeading } from './ui/Reveal'
import DarkSection from './ui/DarkSection'

/** Closing call to action used at the end of inner pages. */
export default function CtaBand({ eyebrow = 'Start a project', text, afterDark = false }: { eyebrow?: string; text?: string; afterDark?: boolean }) {
  return (
    <DarkSection aria-label="Start a project" afterDark={afterDark} className={afterDark ? 'border-t border-paper/10' : ''}>
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 px-6 py-28 md:px-10 md:py-36 lg:flex-row lg:items-end">
        <div>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <MaskHeading className="mt-6 text-[clamp(2.6rem,6vw,6rem)]" lines={["Let's build", <>something <Accent>useful.</Accent></>]} />
          <FadeUp delay={0.2} className="mt-8 max-w-md text-[17px] leading-relaxed text-paper/60">
            {text ?? 'Tell us what you want to build, improve or grow. We reply within 24 business hours.'}
          </FadeUp>
        </div>
        <FadeUp delay={0.3}>
          <Link
            href="/contact"
            className="group relative isolate inline-flex items-center gap-4 overflow-hidden rounded-full bg-paper py-2 pl-7 pr-2 text-base font-medium text-ink"
          >
            <span aria-hidden className="absolute inset-0 -z-10 translate-y-full rounded-full bg-sky transition-transform duration-500 ease-expo group-hover:translate-y-0" />
            Start a project
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper">
              <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
            </span>
          </Link>
        </FadeUp>
      </div>
    </DarkSection>
  )
}
