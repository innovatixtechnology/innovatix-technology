'use client'

import { motion } from 'motion/react'
import { founders, principles, stats, type Founder } from '../lib/content'
import { ease } from '../lib/motion'
import { Accent, Eyebrow, FadeUp, MaskHeading } from './ui/Reveal'

const FRAME = 6 // px, brand frame thickness

/**
 * Background-free portrait standing in a brand frame; the head breaks out of
 * the top edge. Black and white, colour returns on hover.
 */
function CutoutPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="group relative mx-auto aspect-[4/5] w-full max-w-[400px]"
    >
      {/* frame starts below the top so the head can rise past it */}
      <motion.span
        aria-hidden
        variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
        transition={{ duration: 1, ease }}
        className="absolute inset-x-0 bottom-0 top-[16%] border-brand"
        style={{ borderWidth: FRAME }}
      />
      {/* clip only at the frame's inner bottom edge */}
      <div className="absolute inset-x-0 top-0" style={{ bottom: FRAME, clipPath: 'inset(-20% -20% 0 -20%)' }}>
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          variants={{ hidden: { y: '18%', opacity: 0 }, show: { y: '0%', opacity: 1 } }}
          transition={{ duration: 1.2, delay: 0.15, ease }}
          style={{ left: FRAME, right: FRAME, width: `calc(100% - ${FRAME * 2}px)` }}
          className="absolute bottom-0 h-full origin-bottom object-contain object-bottom grayscale contrast-[1.1] transition-[filter,scale] duration-700 ease-expo group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  )
}

function FounderRow({ founder, index }: { founder: Founder; index: number }) {
  const flip = index % 2 === 1
  return (
    <article className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className={flip ? 'md:order-2' : ''}>
        <CutoutPortrait src={founder.photo} alt={`${founder.name}, ${founder.role} at Innovatix Technology`} />
      </div>
      <div className={flip ? 'md:order-1 md:justify-self-end' : ''}>
        <FadeUp>
          <h3 className="text-brand-gradient w-fit font-display text-[clamp(2rem,3.8vw,3.4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em]">
            {founder.name}
          </h3>
          <p className="mt-4 text-lg font-medium">{founder.role}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-ink">{founder.focus.join(' . ')}.</p>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">{founder.bio}</p>
        </FadeUp>
      </div>
    </article>
  )
}

const COMPANY = [
  'Innovatix Technology is a marketing and technology company. We bring brand, design, websites, software and AI under one roof, so a business can grow without juggling three different agencies.',
  'From fragrance and food brands to manufacturers and AI startups, we have launched more than 50 projects across 8 industries. Each one is built to look good, work fast and bring in real customers.',
]

const TEAM_INTRO =
  'Most businesses end up with one agency for the brand, another for the website and a third for the software. We started Innovatix so they would not have to. Between the three of us we cover business, marketing and technology, and we stay close to every project from the first call to launch day.'

/** The About us page: the company, the three co-founders, then how we work. */
export default function Team() {
  return (
    <section aria-labelledby="about-title" className="relative bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 pb-28 pt-40 md:px-10 md:pb-36 md:pt-48">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow>About us</Eyebrow>
          </div>
          <MaskHeading
            as="h1"
            id="about-title"
            className="mx-auto mt-6 text-[clamp(2.6rem,6vw,6rem)]"
            lines={['Your brand,', <Accent key="l2">our obsession.</Accent>]}
          />
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink-soft md:text-lg">
            {COMPANY.map((line, i) => (
              <FadeUp key={i} delay={0.2 + i * 0.1}>
                <p>{line}</p>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-ink/10 pt-10 text-center md:mt-20">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-none tracking-[-0.05em]">{s.value}</div>
              <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft md:text-xs">{s.label}</div>
            </FadeUp>
          ))}
        </div>

        <div id="team" className="scroll-mt-28 pt-28 text-center md:pt-36">
          <div className="flex justify-center">
            <Eyebrow>Our team</Eyebrow>
          </div>
          <MaskHeading
            className="mx-auto mt-6 text-[clamp(2.2rem,4.6vw,4.4rem)]"
            lines={['The people', <>behind the <Accent>work.</Accent></>]}
          />
          <FadeUp delay={0.2} className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-lg">
            {TEAM_INTRO}
          </FadeUp>
        </div>

        <div className="mt-24 space-y-28 md:mt-32 md:space-y-32">
          {founders.map((f, i) => (
            <FounderRow key={f.name} founder={f} index={i} />
          ))}
        </div>

        <div className="mt-32 border-t border-ink/10 pt-14 md:mt-40">
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
            {principles.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <span className="font-serif text-sm italic text-sky">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">{p.title}</h2>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-soft">{p.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
