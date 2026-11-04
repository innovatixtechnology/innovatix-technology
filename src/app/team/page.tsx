import type { Metadata } from 'next'
import CtaBand from '../../components/CtaBand'
import Team from '../../components/Team'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the co-founders of Innovatix Technology: Yash Choudhary (CEO), Sanchita Dhariwal (CMO) and Vishal Patil (CTO). One team for marketing and technology.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <>
      <Team />
      <CtaBand eyebrow="Work with us" />
    </>
  )
}
