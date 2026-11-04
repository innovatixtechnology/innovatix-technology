'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONTACT_EMAIL, nav as links, type NavLink } from '../lib/content'
import { introDelay } from '../lib/intro'
import MagneticButton from './MagneticButton'


const ease = [0.16, 1, 0.3, 1] as const
const MotionLink = motion.create(Link)
/** Pages with a dark header; the bar switches to light text on these. */
const DARK_PAGES: string[] = []

export default function Navbar() {
  const pathname = usePathname()
  // Timing only (not markup), so the server default of 0 is safe.
  const [delay] = useState(introDelay)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openedOn, setOpenedOn] = useState(pathname)

  // Close the mobile menu after navigating to another page.
  if (open && openedOn !== pathname) {
    setOpen(false)
    setOpenedOn(pathname)
  }
  const dark = DARK_PAGES.includes(pathname) && !open
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  // A sub-link is current unless a more specific sibling (e.g. /work/portfolio under /work) matches.
  const isChildActive = (parent: NavLink, href: string) =>
    isActive(href) && !parent.children!.some((c) => c.href.length > href.length && isActive(c.href))

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 320)
    setScrolled(y > 16)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !open ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: scrolled ? 0 : delay + 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          scrolled && !open
            ? dark
              ? 'border-paper/10 bg-ink/80 backdrop-blur-lg'
              : 'border-ink/[0.07] bg-paper/80 backdrop-blur-lg'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-500 md:px-10 ${
            scrolled ? 'h-16' : 'h-20 md:h-24'
          }`}
        >
          <Link href="/" aria-label="Innovatix Technology home" className="relative z-10 -ml-1 block">
            <img
              src="/innovatix-logo.png"
              alt="Innovatix Technology"
              width={392}
              height={147}
              className={`w-auto transition-[height] duration-500 ${scrolled ? 'h-11' : 'h-12 md:h-14'} ${dark ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.label} className="group/nav relative">
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  aria-haspopup={l.children ? 'true' : undefined}
                  className={`group relative flex items-center gap-1 py-2 text-sm transition-colors duration-300 ${
                    dark
                      ? isActive(l.href) ? 'text-paper' : 'text-paper/60 hover:text-paper'
                      : isActive(l.href) ? 'text-ink' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {l.label}
                  {l.children && (
                    <ChevronDown
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-500 ease-expo group-hover/nav:rotate-180 group-focus-within/nav:rotate-180"
                    />
                  )}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 bottom-1 h-px transition-transform ${dark ? 'bg-paper' : 'bg-ink'} duration-500 ease-expo ${
                      isActive(l.href) ? 'scale-x-100' : 'origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100'
                    }`}
                  />
                </Link>
                {l.children && (
                  // pt-3 bridges the gap so the menu stays open while the pointer moves down to it.
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-expo group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                    <ul className="w-[19rem] rounded-2xl bg-white p-2 shadow-[0_24px_60px_-24px_rgba(11,26,58,0.35)] ring-1 ring-ink/[0.07]">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={isChildActive(l, c.href) ? 'page' : undefined}
                            className={`group/item flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-paper ${
                              isChildActive(l, c.href) ? 'bg-paper' : ''
                            }`}
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block text-[15px] font-medium text-ink">{c.label}</span>
                              <span className="mt-0.5 block text-[13px] leading-snug text-ink-soft">{c.text}</span>
                            </span>
                            <ArrowRight
                              aria-hidden
                              className="h-4 w-4 shrink-0 -translate-x-1 text-ink opacity-0 transition-all duration-500 ease-expo group-hover/item:translate-x-0 group-hover/item:opacity-100"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden lg:block">
              <MagneticButton href="/contact" size="sm" tone={dark ? 'light' : 'dark'}>
                Let&rsquo;s talk
              </MagneticButton>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen((o) => !o)
                setOpenedOn(pathname)
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`flex h-11 cursor-pointer items-center gap-3 rounded-full px-1 text-sm font-medium lg:hidden ${dark ? 'text-paper' : ''}`}
            >
              {open ? 'Close' : 'Menu'}
              <span aria-hidden className="relative block h-3 w-6">
                <motion.span
                  className={`absolute left-0 top-0 h-px w-full ${dark ? 'bg-paper' : 'bg-ink'}`}
                  animate={open ? { top: '50%', rotate: 45 } : { top: '0%', rotate: 0 }}
                  transition={{ duration: 0.4, ease }}
                />
                <motion.span
                  className={`absolute bottom-0 left-0 h-px w-full ${dark ? 'bg-paper' : 'bg-ink'}`}
                  animate={open ? { bottom: '50%', rotate: -45 } : { bottom: '0%', rotate: 0 }}
                  transition={{ duration: 0.4, ease }}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="border-t border-ink/10">
              {links.map((l, i) => (
                <li key={l.label} className="overflow-hidden border-b border-ink/10">
                  <MotionLink
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease }}
                    className="flex items-baseline justify-between py-5 pr-1 font-display text-[2.6rem] font-medium leading-none tracking-[-0.04em]"
                  >
                    {l.label}
                    <span className="font-serif text-base italic text-sky">0{i + 1}</span>
                  </MotionLink>
                  {l.children && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
                      className="-mt-1 flex flex-wrap gap-2 pb-5"
                    >
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[15px] ring-1 transition-colors ${
                              isChildActive(l, c.href) ? 'bg-ink text-paper ring-ink' : 'text-ink ring-ink/15'
                            }`}
                          >
                            {c.label}
                            <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-auto space-y-6"
            >
              <MagneticButton href="/contact" onClick={() => setOpen(false)}>
                Start a project
              </MagneticButton>
              <p className="text-sm text-ink-soft">{CONTACT_EMAIL}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
