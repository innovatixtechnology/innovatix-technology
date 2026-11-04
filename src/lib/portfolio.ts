/**
 * Non-website work for the Portfolio page, taken from the Innovatix portfolio deck.
 * Images live in public/work/portfolio/. Websites come from `featuredProjects`
 * and `moreProjects` in content.ts.
 */

const img = (name: string) => `/work/portfolio/${name}.jpg`

export type PieceCategory = 'branding' | 'social' | 'print' | 'film'

/** `caseStudy` links the piece to its full story at /work/<slug>. */
export type Piece = { src: string; client: string; what: string; category: PieceCategory; caseStudy?: string }

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'websites', label: 'Websites' },
  { key: 'branding', label: 'Branding' },
  { key: 'social', label: 'Social media' },
  { key: 'print', label: 'Print & campaigns' },
  { key: 'film', label: 'Photo & film' },
] as const

export type FilterKey = (typeof filters)[number]['key']

export const pieces: Piece[] = [
  { src: img('kingmaliya-poster'), client: 'King Maliya Mattress', what: 'Rebrand: brand poster', category: 'branding', caseStudy: 'king-maliya' },
  { src: img('logos-wall'), client: 'Logo collection', what: 'Logos designed for our clients', category: 'branding' },
  { src: img('kingmaliya-box'), client: 'King Maliya Mattress', what: 'Mattress packaging', category: 'branding', caseStudy: 'king-maliya' },
  { src: img('logos-identity'), client: 'Omega Glasses, Hydrovia, Aarambh, Restova', what: 'Identity systems', category: 'branding' },
  { src: img('ngca-merch'), client: 'Next Gen Cricket Academy', what: 'Logo & merchandise', category: 'branding' },
  { src: img('app-ui'), client: 'Food delivery app', what: 'App UI kit', category: 'branding' },

  { src: img('insta-after'), client: 'Brahm Varchas', what: 'Instagram redesign', category: 'social', caseStudy: 'brahm-varchas' },
  { src: img('nyla-launch'), client: 'Nyla Foods', what: 'Brand launch on Instagram', category: 'social', caseStudy: 'nyla-foods' },
  { src: img('festive-posts'), client: 'SalesUps Technologies', what: 'Festive & brand posts', category: 'social' },
  { src: img('profiles-1'), client: 'Nanda Dental Care, Klean Company, Restova, Brahm Varchas', what: 'Profiles we manage', category: 'social' },
  { src: img('profiles-2'), client: 'Vinayaka Perfumery, Umadi Foods, Nxt-21, Singh Mobile', what: 'Profiles we manage', category: 'social' },

  { src: img('plastfocus'), client: 'PlastFocus 2024', what: 'Event identity & campaign', category: 'print', caseStudy: 'plastfocus' },
  { src: img('ambulance-wrap'), client: 'Royal Mudhol Hospital', what: 'Ambulance wrap', category: 'print' },
  { src: img('vitara-1'), client: 'Vitara Healthcare', what: 'Awareness posters', category: 'print' },
  { src: img('dental'), client: 'Ruby Hall Clinic × Nanda Dental Care', what: 'Display creatives', category: 'print' },
  { src: img('magazine'), client: 'Vinayaka Perfumery', what: 'Magazine feature', category: 'print', caseStudy: 'vinayaka-perfumery' },
  { src: img('brochure-gainext'), client: 'Gainext Consultancy', what: 'Tri-fold brochure', category: 'print' },
  { src: img('vitara-2'), client: 'Vitara Healthcare', what: 'Awareness posters', category: 'print' },
  { src: img('olive'), client: 'Olive Health Centre', what: 'Posters', category: 'print' },
  { src: img('brochure-ardent'), client: 'Ardent Clinical Research', what: 'Corporate brochure', category: 'print' },

  { src: img('photo-corporate'), client: 'Corporate & industrial', what: 'Aerial photography', category: 'film' },
  { src: img('video-launch'), client: 'Store launch', what: 'Event videography', category: 'film' },
  { src: img('video-retail'), client: 'Vinayaka Perfumery & Umadi Foods', what: 'Retail shoot', category: 'film' },
]
