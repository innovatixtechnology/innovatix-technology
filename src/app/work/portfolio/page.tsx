import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'
import CtaBand from '../../../components/CtaBand'
import Portfolio from '../../../components/Portfolio'
import { Accent } from '../../../components/ui/Reveal'
import PageHeader from '../../../components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Websites, stores, brands, social media campaigns, print and photography by Innovatix Technology.',
  alternates: { canonical: '/work/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        lines={['Everything we', <Fragment key="l2">have <Accent>made.</Accent></Fragment>]}
        intro="Websites, stores, identities, social feeds, print and shoots for businesses across industries."
      >
        <Link href="/work" className="group inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-[15px] font-medium transition-colors hover:border-ink">
          Read the case studies
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
        </Link>
      </PageHeader>

      <section aria-label="Portfolio" className="bg-paper">
        <Portfolio />
      </section>

      <CtaBand eyebrow="Your project next" />
    </>
  )
}
