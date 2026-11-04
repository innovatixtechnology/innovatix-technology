'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ease } from '../../lib/motion'

/** Opening block for inner pages: eyebrow, large masked title, short intro. */
export default function PageHeader({
  eyebrow,
  lines,
  intro,
  children,
  tone = 'light',
}: {
  eyebrow: string
  lines: ReactNode[]
  intro?: string
  children?: ReactNode
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <header className={`relative ${dark ? 'bg-ink text-paper' : 'bg-paper'}`}>
      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${dark ? 'text-paper/60' : 'text-ink-soft'}`}
        >
          <span className="h-px w-8 bg-sky" />
          {eyebrow}
        </motion.p>
        <h1 className="mt-7 max-w-[18ch] font-display text-[clamp(2.8rem,7vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        {(intro || children) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            {intro && <p className={`max-w-lg text-[17px] leading-relaxed md:text-lg ${dark ? 'text-paper/60' : 'text-ink-soft'}`}>{intro}</p>}
            {children}
          </motion.div>
        )}
      </div>
    </header>
  )
}
