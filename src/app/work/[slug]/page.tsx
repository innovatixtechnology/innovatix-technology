import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyView from '../../../components/CaseStudyView'
import { caseStudies, getCaseStudy } from '../../../lib/caseStudies'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = getCaseStudy((await params).slug)
  if (!study) return {}
  return {
    title: `${study.client}: ${study.title}`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { images: [{ url: study.cover }] },
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const study = getCaseStudy((await params).slug)
  if (!study) notFound()
  return <CaseStudyView slug={study.slug} />
}
