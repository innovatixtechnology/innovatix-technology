'use client'

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react'
import { HEYBUDS } from './work'
import { chaosItems, type ChaosItemConfig } from './items'

const ease = [0.16, 1, 0.3, 1] as const
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const easeInOut = (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// Scroll timeline (fractions of the pinned section).
const FLY_START = 0.1
const FLY_STAGGER = 0.035
const FLY_LENGTH = 0.32
const REVEAL = [0.68, 0.8] as const

type Geometry = {
  w: number
  h: number
  s: number
  mobile: boolean
  frame: { left: number; top: number; w: number; th: number; ch: number }
}

function measure(w: number, h: number): Geometry {
  const mobile = w < 768
  const s = mobile ? Math.min(0.6, Math.max(0.46, w / 700), h / 1150) : Math.min(1.1, Math.max(0.6, w / 1440))
  const fw = mobile ? w * 0.9 : Math.min(w * 0.62, h * 0.6 * 1.6, 1080)
  const ch = fw / 1.6
  const th = Math.max(22, fw * 0.034)
  const cy = h * (mobile ? 0.5 : 0.57)
  return { w, h, s, mobile, frame: { left: (w - fw) / 2, top: cy - (ch + th) / 2, w: fw, th, ch } }
}

function ChaosItem({
  item,
  index,
  geo,
  progress,
  px,
  py,
  delay,
}: {
  item: ChaosItemConfig
  index: number
  geo: Geometry
  progress: MotionValue<number>
  px: MotionValue<number>
  py: MotionValue<number>
  delay: number
}) {
  const reduce = useReducedMotion()
  const W = item.base * geo.s
  const H = W / item.aspect
  const spot = geo.mobile ? item.mobile : item.desk
  const sx = (spot.x / 100) * geo.w
  const sy = (spot.y / 100) * geo.h

  const { frame } = geo
  const tx = item.target ? frame.left + (item.target.x / 100) * frame.w : sx + (item.exit?.x ?? 0) * geo.w
  const ty = item.target ? frame.top + frame.th + (item.target.y / 100) * frame.ch : sy + (item.exit?.y ?? 0) * geo.h
  const tScale = item.target ? ((item.target.w / 100) * frame.w) / W : 1
  const tRot = item.target ? 0 : spot.r + (item.exit?.r ?? 0)

  const start = FLY_START + index * FLY_STAGGER
  const t = useTransform(progress, (v) => easeInOut(clamp01((v - start) / FLY_LENGTH)))
  const parallax = reduce ? 0 : item.depth * 14
  const x = useTransform(() => lerp(sx, tx, t.get()) - W / 2 + px.get() * parallax * (1 - t.get()))
  const y = useTransform(() => lerp(sy, ty, t.get()) - H / 2 + py.get() * parallax * (1 - t.get()))
  const rotate = useTransform(t, (v) => lerp(spot.r, tRot, v))
  const scale = useTransform(t, (v) => lerp(1, tScale, v))
  const opacity = useTransform(progress, item.target ? [REVEAL[0], REVEAL[1]] : [start, start + FLY_LENGTH], [1, 0])

  return (
    <motion.div
      aria-hidden
      className="absolute left-0 top-0 z-10"
      style={{ x, y, rotate, scale, opacity, width: W, height: H }}
    >
      <motion.div
        className="h-full w-full"
        initial={reduce ? false : { y: -geo.h - H, rotate: spot.r > 0 ? 25 : -25 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 13, mass: 0.9, delay: delay + index * 0.07 }}
      >
        <motion.div
          className="group @container h-full w-full cursor-grab"
          whileHover={{ y: -8, rotate: spot.r > 0 ? 2 : -2, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {item.card ? <div className="shadow-real h-full w-full">{item.node}</div> : item.node}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function ChaosHero({ delay }: { delay: number }) {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // Desktop default on the server; the real size is measured before paint.
  const [geo, setGeo] = useState<Geometry>(() => measure(1440, 900))

  useLayoutEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setGeo(measure(entry.contentRect.width, entry.contentRect.height)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  // Pointer parallax (-0.5..0.5), smoothed.
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const px = useSpring(rawX, { stiffness: 50, damping: 18 })
  const py = useSpring(rawY, { stiffness: 50, damping: 18 })
  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    rawX.set(e.clientX / window.innerWidth - 0.5)
    rawY.set(e.clientY / window.innerHeight - 0.5)
  }

  // Scroll-linked layers.
  const introOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.12], [0, reduce ? 0 : -60])
  const frameOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.08, 0.3], [0.94, 1])
  const shotOpacity = useTransform(scrollYProgress, [REVEAL[0], REVEAL[1]], [0, 1])
  const outroOpacity = useTransform(scrollYProgress, [0.78, 0.9], [0, 1])
  const outroY = useTransform(scrollYProgress, [0.78, 0.9], [reduce ? 0 : 30, 0])
  const badgeScale = useTransform(scrollYProgress, [0.86, 0.92], [0.6, 1])
  const badgeOpacity = useTransform(scrollYProgress, [0.86, 0.9], [0, 1])
  const [hintVisible, setHintVisible] = useState(true)

  useEffect(() => scrollYProgress.on('change', (v) => setHintVisible(v < 0.04)), [scrollYProgress])

  const { frame } = geo
  const d = delay + 0.6

  return (
    <section ref={sectionRef} id="top" aria-labelledby="hero-title" className="relative h-[320vh]">
      <div ref={stageRef} onPointerMove={onMove} className="sticky top-0 h-[100svh] overflow-hidden">
        {/* desk surface */}
        <div aria-hidden className="desk absolute inset-0" />

        {/* empty browser that the pieces assemble into */}
        <motion.div
          className="absolute z-0 overflow-hidden rounded-[10px] bg-white shadow-[0_2px_4px_rgba(11,26,58,0.06),0_30px_80px_-20px_rgba(11,26,58,0.35)] ring-1 ring-ink/10"
          style={{ left: frame.left, top: frame.top, width: frame.w, opacity: frameOpacity, scale: frameScale }}
        >
          <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-[#f3f3f1] px-3" style={{ height: frame.th }}>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="mx-auto truncate rounded-md bg-white px-6 py-0.5 text-[11px] text-ink-soft ring-1 ring-ink/[0.06]">
              {HEYBUDS.host}
            </span>
          </div>
          <div className="relative bg-[#eeede8]" style={{ height: frame.ch }}>
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(11,26,58,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,26,58,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <motion.img
              src={HEYBUDS.shot}
              alt="HeyBuds homepage, designed and built by Innovatix"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: shotOpacity }}
            />
          </div>
        </motion.div>

        {/* launched badge */}
        <motion.div
          aria-hidden
          className="absolute z-20 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-paper shadow-lg"
          style={{
            left: frame.left + frame.w - (geo.mobile ? 120 : 150),
            top: frame.top + frame.th + frame.ch - 18,
            scale: badgeScale,
            opacity: badgeOpacity,
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28c840]" />
          </span>
          Live &amp; launched
        </motion.div>

        {/* the mess */}
        {chaosItems.map((item, i) =>
          geo.mobile && item.mobileHidden ? null : (
            <ChaosItem key={item.id} item={item} index={i} geo={geo} progress={scrollYProgress} px={px} py={py} delay={delay} />
          ),
        )}

        {/* opening headline */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: d + 0.4, ease }}
            className="flex items-center gap-2.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft sm:gap-3 sm:text-xs sm:tracking-[0.22em]"
          >
            <span className="hidden h-px w-5 bg-sky min-[400px]:block sm:w-8" />
            Ideas that sell. Code that scales.
            <span className="hidden h-px w-5 bg-sky min-[400px]:block sm:w-8" />
          </motion.p>
          <h1
            id="hero-title"
            className="mt-6 max-w-[15ch] font-display text-[clamp(2.5rem,5.6vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink"
          >
            {['Every great product', 'starts as a', 'beautiful mess.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, delay: d + 0.5 + i * 0.1, ease }}
                >
                  {i === 2 ? (
                    <>
                      <em className="text-brand-gradient pr-[0.06em] font-serif font-normal">beautiful</em> mess.
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: hintVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: hintVisible ? d + 1.4 : 0 }}
            className="mt-7 flex flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-soft sm:mt-10 sm:text-[11px] sm:tracking-[0.22em]"
          >
            Scroll to make sense of it
            <span className="relative hidden h-9 w-px overflow-hidden bg-ink/15 sm:block">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-ink"
                animate={reduce ? undefined : { y: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </motion.div>
        </motion.div>

        {/* closing line */}
        {/* sits in the space above the browser */}
        <motion.div
          style={{ opacity: outroOpacity, y: outroY, top: Math.max(84, frame.top - (geo.mobile ? 150 : 140)) }}
          className="pointer-events-none absolute inset-x-0 z-20 px-6 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">From sketch to live site</p>
          <p className="mt-3 font-display text-[clamp(2rem,4vw,3.6rem)] font-medium leading-none tracking-[-0.04em] text-ink">
            We turn the mess into <em className="text-brand-gradient pr-[0.06em] font-serif font-normal">this.</em>
          </p>
        </motion.div>
        <motion.p
          style={{ opacity: outroOpacity, top: frame.top + frame.th + frame.ch + 22 }}
          className="absolute inset-x-0 z-20 px-6 text-center text-sm text-ink-soft"
        >
          {HEYBUDS.name} · AI employees for every business · Designed &amp; built by Innovatix ·{' '}
          <a
            href={HEYBUDS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          >
            Visit live site ↗
          </a>
        </motion.p>
      </div>
    </section>
  )
}
