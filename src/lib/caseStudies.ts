/**
 * Case studies: one page each at /work/<slug>.
 * Copy here describes only what is visible in the delivered work. Add results
 * (traffic, leads, sales) to `results` once the client agrees to share them.
 */

export type CaseStudy = {
  slug: string
  client: string
  title: string
  summary: string
  industry: string
  services: string[]
  cover: string
  url?: string
  intro: string
  results?: { value: string; label: string }[]
  sections: { heading: string; text: string; images: string[] }[]
}

const pf = (name: string) => `/work/portfolio/${name}.jpg`

export const caseStudies: CaseStudy[] = [
  {
    slug: 'heybuds',
    client: 'HeyBuds',
    title: 'A launch-ready home for AI employees',
    summary: 'Website design and development for an AI SaaS product.',
    industry: 'AI SaaS',
    services: ['Website design', 'Development', 'UI/UX'],
    cover: '/work/heybuds-hero.jpg',
    url: 'https://www.heybuds.in/',
    intro:
      'HeyBuds deploys AI employees that answer questions, capture leads and support customers around the clock. The website had to explain a new kind of product in seconds and turn visitors into free-trial sign-ups.',
    sections: [
      {
        heading: 'A clear first impression',
        text: 'A bold headline, a warm human photograph and a chat bubble that types itself show what the product does before a visitor reads a word.',
        images: ['/work/heybuds-hero.jpg'],
      },
      {
        heading: 'Explaining the product',
        text: 'Services and features are broken into short, scannable blocks with simple illustrations, so a business owner can see exactly where an AI employee fits.',
        images: ['/work/heybuds-services.jpg', '/work/heybuds-features.jpg', '/work/heybuds-channels.jpg'],
      },
      {
        heading: 'Built to convert',
        text: 'Transparent pricing, a clear approach section and repeated trial and demo calls to action guide visitors towards signing up.',
        images: ['/work/heybuds-pricing.jpg', '/work/heybuds-approach.jpg', '/work/heybuds-industries.jpg'],
      },
    ],
  },
  {
    slug: 'vinayaka-perfumery',
    client: 'Vinayaka Perfumery',
    title: 'Taking a 25-year fragrance brand online',
    summary: 'E-commerce website, social media, a magazine feature and retail video for an incense maker.',
    industry: 'Fragrance & FMCG',
    services: ['E-commerce website', 'Social media', 'Magazine feature', 'Videography'],
    cover: '/work/vinayaka-hero.jpg',
    url: 'https://www.vinayakaperfumery.com/',
    intro:
      'Vinayaka Perfumery has made agarbatti and dhoop since 1998 and sells through more than 470 distributors and major retail chains. As its marketing partner, we brought that legacy online, from the store itself to the stories told about the brand.',
    sections: [
      {
        heading: 'A store that feels like the brand',
        text: 'A rich, devotional hero introduces the Divine Series, while rails for new arrivals, best sellers and categories make it easy to browse and buy.',
        images: ['/work/vinayaka-hero.jpg', '/work/vinayaka-bestsellers.jpg', '/work/vinayaka-category.jpg'],
      },
      {
        heading: "Telling the founder's story",
        text: 'A two-page magazine feature traces the journey from a single agarbatti product to the brand behind Black Fantasy, and the website carries the same story of tradition, trust and women-led craft.',
        images: [pf('vinayaka-magazine'), '/work/vinayaka-story.jpg'],
      },
      {
        heading: 'On social and on the shelf',
        text: 'A consistent Instagram presence and video shot in retail aisles put the products in front of customers wherever they shop.',
        images: [pf('vinayaka-instagram'), pf('vinayaka-retail')],
      },
    ],
  },
  {
    slug: 'king-maliya',
    client: 'King Maliya Mattress',
    title: 'A complete rebrand for a mattress maker',
    summary: 'New logo, identity, packaging and print for an established brand.',
    industry: 'Manufacturing & retail',
    services: ['Logo', 'Brand identity', 'Packaging', 'Print'],
    cover: pf('kingmaliya-poster'),
    intro:
      'King Maliya had a busy, dated look that did not reflect the quality of its mattresses. We rebuilt the brand from the logo up so it feels calm, premium and trustworthy on every surface.',
    sections: [
      {
        heading: 'Where we started',
        text: 'The original logo and packaging relied on loud colours, mixed type styles and crowded layouts.',
        images: [pf('kingmaliya-before')],
      },
      {
        heading: 'A new identity',
        text: 'An elegant wordmark with a soft wave and stars, a deep navy and sand palette, and the line "Crafting quality sleep for a Brighter Tomorrow".',
        images: [pf('kingmaliya-logo'), pf('kingmaliya-stationery')],
      },
      {
        heading: 'Brought to life',
        text: 'The identity carries through posters, product benefits and mattress packaging, giving the brand one consistent, premium voice.',
        images: [pf('kingmaliya-poster'), pf('kingmaliya-box')],
      },
    ],
  },
  {
    slug: 'umadi-foods',
    client: "Umadi's Foods",
    title: 'Bringing a food brand from 1969 online',
    summary: 'E-commerce website, social media, product photography and retail video.',
    industry: 'Food & FMCG',
    services: ['E-commerce website', 'Social media', 'Product photography', 'Videography'],
    cover: '/work/umadi-home.jpg',
    url: 'https://umadifoods.com/',
    intro:
      "Umadi's has made pickles, chutney powders and masalas in North Karnataka since 1969. We helped a trusted local name sell anywhere in India, with an online store and content that makes the products look as good as they taste.",
    sections: [
      {
        heading: 'A store for every season',
        text: 'New collection launches and festive campaigns such as Holi offers lead the homepage, so returning customers always find something new.',
        images: ['/work/umadi-home.jpg', pf('umadi-holi')],
      },
      {
        heading: 'Products that look the part',
        text: "Clean product photography for the store, and video shot in retail aisles where Umadi's jars and packs sit on the shelf.",
        images: [pf('umadi-product'), pf('umadi-retail')],
      },
      {
        heading: 'A growing community',
        text: 'Product posts, festive offers and reels keep the Instagram profile active for more than 3,000 followers.',
        images: [pf('umadi-instagram')],
      },
    ],
  },
  {
    slug: 'brahm-varchas',
    client: 'Brahm Varchas',
    title: 'One clear voice on Instagram',
    summary: 'Social media redesign for a Vedic parenting and Ayurveda educator.',
    industry: 'Health & education',
    services: ['Social media', 'Content design', 'Webinar campaigns'],
    cover: pf('insta-after'),
    intro:
      'Brahm Varchas runs courses and webinars on Vedic parenting, Garbh Vigyan and Rajaswala Paricharya. Its Instagram changed style from post to post, so the profile did not look like one organisation.',
    sections: [
      {
        heading: 'Where we started',
        text: 'Festive greetings, webinar announcements and health posts each had their own colours, type and layout, with nothing tying them together.',
        images: [pf('insta-before')],
      },
      {
        heading: 'One system, every post',
        text: 'A green-and-white template for course posts, warm photography for Garbh Vigyan and bold webinar posts with clear dates and a "Register now" call to action. The profile now reads as one trusted brand.',
        images: [pf('insta-after')],
      },
    ],
  },
  {
    slug: 'nyla-foods',
    client: 'Nyla Foods',
    title: 'Launching a spice brand on Instagram',
    summary: 'Launch campaign and social content for a new food brand.',
    industry: 'Food & FMCG',
    services: ['Social media', 'Content design', 'Launch campaign'],
    cover: pf('nyla-launch'),
    intro:
      'Nyla Foods needed to introduce a new range of masalas and mixes online. We planned and designed a launch grid that tells the brand story and introduces each product.',
    sections: [
      {
        heading: 'One grid, one story',
        text: 'Product posts alternate with brand-promise posts (no MSG, no preservatives, pure veg) and a launch banner that introduces the brand and its vision, so the profile reads as a single story.',
        images: [pf('nyla-launch')],
      },
    ],
  },
  {
    slug: 'plastfocus',
    client: 'PlastFocus 2024',
    title: 'An identity for a plastics industry exhibition',
    summary: 'Event logo and social media templates for a five-day trade show.',
    industry: 'Events & exhibitions',
    services: ['Event branding', 'Logo', 'Social media'],
    cover: pf('plastfocus-logo'),
    intro:
      'PlastFocus is an exhibition for the plastics industry, organised by Triune Exhibitors and powered by PMMAI. Its second edition, held from 1 to 5 February 2024 at Yashobhoomi (IICC) in New Delhi, needed an identity that could promote the show everywhere.',
    sections: [
      {
        heading: 'A logo that works as a frame',
        text: 'A bold P mark and a sweeping curved border hold the event name, dates and venue in a single lockup.',
        images: [pf('plastfocus-logo')],
      },
      {
        heading: 'One template, many posts',
        text: 'The curved border doubles as a frame for social posts, so every announcement, from "50 reasons to visit" to award call-outs, is instantly recognisable as PlastFocus.',
        images: [pf('plastfocus-posts')],
      },
    ],
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
