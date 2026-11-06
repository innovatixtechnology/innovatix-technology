import type { Metadata } from 'next'
import CtaBand from '../../components/CtaBand'
import Team from '../../components/Team'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Innovatix Technology brings marketing and technology under one roof. Meet the co-founders: Yash Choudhary (CEO), Sanchita Dhariwal (CMO) and Vishal Patil (CTO). One team for marketing and technology.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <Team />
      <CtaBand eyebrow="Work with us" />
    </>
  )
}
