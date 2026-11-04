'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import Link from 'next/link'
import { useRef, type PointerEvent, type ReactNode } from 'react'

const MotionLink = motion.create(Link)

type Props = {
  children: ReactNode
  href: string
  size?: 'md' | 'sm'
  className?: string
  onClick?: () => void
  /** 'light' is a paper pill for dark backgrounds. */
  tone?: 'dark' | 'light'
}

/** Ink pill that drifts toward the cursor; a brand fill rises on hover. */
export default function MagneticButton({ children, href, size = 'md', className = '', onClick, tone = 'dark' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 })

  const onMove = (e: PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const pad = size === 'md' ? 'py-2 pl-6 pr-2 text-[15px] gap-4' : 'py-1.5 pl-4 pr-1.5 text-sm gap-3'
  const dot = size === 'md' ? 'h-10 w-10' : 'h-8 w-8'

  return (
    <MotionLink
      ref={ref}
      href={href}
      onClick={onClick}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`group relative isolate inline-flex cursor-pointer items-center overflow-hidden rounded-full font-medium transition-colors duration-500 ${
        tone === 'light' ? 'bg-paper text-ink hover:text-paper' : 'bg-ink text-paper'
      } ${pad} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-y-full rounded-full bg-brand transition-transform duration-500 ease-expo group-hover:translate-y-0"
      />
      {children}
      <span className={`grid ${dot} place-items-center overflow-hidden rounded-full ${tone === 'light' ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45"
        />
      </span>
    </MotionLink>
  )
}
