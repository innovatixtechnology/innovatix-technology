import type { Metadata } from 'next'
import { Fragment } from 'react'
import CtaBand from '../../components/CtaBand'
import Process from '../../components/Process'
import { Engagements } from '../../components/ServicesDetail'
import { ServicesSplit } from '../../components/ServicesSplit'
import { Accent } from '../../components/ui/Reveal'
import PageHeader from '../../components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Software & AI, websites & apps, branding, digital marketing, photography & film, and events & exhibitions. Six disciplines from one team.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        lines={['Marketing that sells.', <Fragment key="l2">Technology that <Accent>scales.</Accent></Fragment>]}
        intro="Six services under one roof, so your brand, website, software and campaigns are built by one team working towards the same goal."
      />
      <ServicesSplit />
      <Engagements />
      <Process />
      <CtaBand />
    </>
  )
}
