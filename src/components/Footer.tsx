'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'
import { CONTACT_EMAIL, CONTACT_PHONE, nav, services } from '../lib/content'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 border-t border-paper/10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src="/innovatix-logo.png" alt="Innovatix Technology" width={392} height={147} className="h-12 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">
              Websites, software, AI workflows, brand systems and growth campaigns for businesses that want practical digital progress.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.flatMap<{ label: string; href: string }>((n) => n.children ?? [n]).map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="text-paper/75 transition-colors hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">Services</p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="/services" className="text-paper/75 transition-colors hover:text-paper">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/40">Contact</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 block break-all text-sm text-paper/75 transition-colors hover:text-paper">
              {CONTACT_EMAIL}
            </a>
            <a href={CONTACT_PHONE.href} className="mt-3 block text-sm text-paper/75 transition-colors hover:text-paper">
              {CONTACT_PHONE.display}
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <motion.p
          style={{ y }}
          className="whitespace-nowrap text-center font-display text-[19vw] font-semibold leading-[0.8] tracking-[-0.06em] text-paper/[0.06]"
        >
          INNOVATIX
        </motion.p>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 pb-8 pt-6 text-xs text-paper/45 sm:flex-row sm:justify-between md:px-10">
        <p>© {YEAR} Innovatix Technology. All rights reserved.</p>
        <a href="#" className="transition-colors hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
