import type { MetadataRoute } from 'next'
import { caseStudies } from '../lib/caseStudies'
import { SITE_URL } from '../lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/work/portfolio', '/services', '/about', '/contact']
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, changeFrequency: 'yearly' as const, priority: 0.6 })),
  ]
}
