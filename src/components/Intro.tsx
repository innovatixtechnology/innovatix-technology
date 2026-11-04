'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { markIntroSeen } from '../lib/intro'

/**
 * Navy curtain with the logo, lifted on the first homepage visit.
 * Always rendered so server and client markup match; CSS hides it
 * (`.intro-curtain` under `[data-intro-seen]`) when it should not play.
 */
export default function Intro() {
  const [done, setDone] = useState(false)
  if (done) return null

  return (
    <motion.div
      aria-hidden
      className="intro-curtain fixed inset-0 z-[90] grid place-items-center bg-ink"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 1.2, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        markIntroSeen()
        setDone(true)
      }}
    >
      <div className="flex flex-col items-center gap-7">
        <motion.img
          src="/innovatix-logo.png"
          alt=""
          className="h-16 w-auto md:h-20"
          initial={{ opacity: 0, y: 14, filter: 'brightness(0) invert(1) blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'brightness(0) invert(1) blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="h-px w-40 overflow-hidden bg-white/15">
          <motion.div
            className="h-full origin-left bg-sky"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
