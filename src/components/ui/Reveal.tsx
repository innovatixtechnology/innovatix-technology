'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ease } from '../../lib/motion'

/** Small uppercase label with a sky hairline. */
export function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease }}
      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${tone === 'dark' ? 'text-paper/60' : 'text-ink-soft'}`}
    >
      <span className="h-px w-8 bg-sky" />
      {children}
    </motion.p>
  )
}

/** Heading whose lines rise out of masks when scrolled into view. */
export function MaskHeading({
  lines,
  as: Tag = 'h2',
  className = '',
  id,
}: {
  lines: ReactNode[]
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  id?: string
}) {
  const MotionTag = Tag === 'h1' ? motion.h1 : Tag === 'h2' ? motion.h2 : motion.h3
  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`font-display font-medium leading-[1] tracking-[-0.04em] ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: '105%' }, show: { y: '0%' } }}
            transition={{ duration: 1, delay: i * 0.1, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** Serif-italic accent word with the brand gradient. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="text-brand-gradient pr-[0.06em] font-serif font-normal">{children}</em>
}

export function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
