'use client'

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

/**
 * Dark band that follows a light one: it enters as an inset, rounded panel and
 * widens to full bleed as it scrolls up, so the light-to-dark change feels gradual.
 */
export default function DarkSection({
  children,
  className = '',
  afterDark = false,
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
}: {
  children: ReactNode
  className?: string
  /** The section above is dark too, so there is nothing to transition from. */
  afterDark?: boolean
  id?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] })
  const inset = useTransform(scrollYProgress, [0, 1], [4, 0])
  const radius = useTransform(scrollYProgress, [0, 1], [56, 0])
  const clipPath = useMotionTemplate`inset(0 ${inset}% 0 ${inset}% round ${radius}px ${radius}px 0 0)`

  return (
    <section ref={ref} id={id} aria-label={ariaLabel} aria-labelledby={ariaLabelledby} className={`relative ${afterDark ? 'bg-ink' : 'bg-paper'}`}>
      <motion.div style={reduce || afterDark ? undefined : { clipPath }} className={`relative bg-ink text-paper ${className}`}>
        {children}
      </motion.div>
    </section>
  )
}
