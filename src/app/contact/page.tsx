import type { Metadata } from 'next'
import { Fragment } from 'react'
import Contact from '../../components/Contact'
import { Accent } from '../../components/ui/Reveal'
import PageHeader from '../../components/ui/PageHeader'
import { CONTACT_EMAIL } from '../../lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Innovatix Technology. Free consultation; we reply within 24 business hours.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        lines={["Let's build", <Fragment key="l2">something <Accent>useful.</Accent></Fragment>]}
        intro="Tell us what you want to build, improve or grow. A short note is enough to get started."
      >
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="border-b border-ink/25 pb-1 text-[clamp(1rem,1.8vw,1.25rem)] font-medium transition-colors hover:border-ink"
        >
          {CONTACT_EMAIL}
        </a>
      </PageHeader>
      <Contact variant="page" />
    </>
  )
}
