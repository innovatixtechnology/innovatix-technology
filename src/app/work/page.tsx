import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'
import CtaBand from '../../components/CtaBand'
import { Accent } from '../../components/ui/Reveal'
import PageHeader from '../../components/ui/PageHeader'
import { CaseStudyCards } from '../../components/Work'

export const metadata: Metadata = {
  title: 'Case studies',
  description: 'How Innovatix Technology designed, built and grew websites, brands and campaigns for real businesses.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        lines={['Projects built', <Fragment key="l2">for <Accent>real</Accent> brands.</Fragment>]}
        intro="The story behind selected projects: where each brand started, what we made and how it all fits together."
      />

      <section aria-label="Case studies" className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-36">
          <div className="border-t border-ink/10 pt-12">
            <CaseStudyCards />
          </div>
          <Link
            href="/work/portfolio"
            className="group mt-20 flex items-center justify-between gap-6 border-y border-ink/10 py-8 md:py-10"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-sky">Portfolio</span>
              <span className="mt-2 block font-display text-[clamp(1.5rem,3vw,2.6rem)] font-medium leading-tight tracking-[-0.04em] transition-transform duration-500 ease-expo group-hover:translate-x-2">
                See everything we have made
              </span>
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-expo group-hover:border-ink group-hover:bg-ink group-hover:text-paper md:h-14 md:w-14">
              <ArrowRight aria-hidden className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand eyebrow="Your project next" />
    </>
  )
}
