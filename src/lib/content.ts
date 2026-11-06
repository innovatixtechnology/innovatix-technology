/**
 * Site copy, distilled from innovatixtech.com. Edit text here, not in components.
 */

export const CONTACT_EMAIL = 'info@innovatixtech.com'
/** Enquiries go to the inbox the Web3Forms key was created for (info@innovatixtech.com); these are copied too. Needs Web3Forms Pro; see NEXT_PUBLIC_WEB3FORMS_PRO in .env.example. */
export const ENQUIRY_CC = ['yash@innovatixtech.com', 'vishal@innovatixtech.com', 'sanchita@innovatixtech.com']
export const CONTACT_PHONE = { display: '+91 97634 10681', href: 'tel:+919763410681' }

export type NavLink = { label: string; href: string; children?: { label: string; href: string; text: string }[] }

export const nav: NavLink[] = [
  {
    label: 'Work',
    href: '/work',
    children: [
      { label: 'Case studies', href: '/work', text: 'The full story behind selected projects' },
      { label: 'Portfolio', href: '/work/portfolio', text: 'Websites, brands, campaigns and content' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'About us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    title: 'Software & AI',
    group: 'Technology' as 'Marketing' | 'Technology',
    pitch: 'Custom software and AI assistants that take repetitive work off your team\'s plate.',
    summary: 'Custom software, AI assistants and automation that remove repetitive work and help teams decide faster.',
    includes: ['Custom software & SaaS platforms', 'AI chatbots & assistant workflows', 'Business process automation', 'Dashboards, APIs & integrations'],
    deliverables: ['Discovery map', 'Architecture', 'Prototype', 'Production build'],
  },
  {
    title: 'Web & Mobile',
    group: 'Technology' as 'Marketing' | 'Technology',
    pitch: 'Websites, stores and apps that load fast, look sharp and sell.',
    summary: 'Fast, polished websites, stores and mobile experiences, built for real users and ready to grow.',
    includes: ['Business websites & landing pages', 'E-commerce storefronts', 'Android & iOS app interfaces', 'CMS setup & performance QA'],
    deliverables: ['UX plan', 'Responsive UI', 'Frontend & backend', 'Deployment'],
  },
  {
    title: 'Brand & Design',
    group: 'Marketing' as 'Marketing' | 'Technology',
    pitch: 'Identities that make a business look as good as it really is.',
    summary: 'Identity, UI/UX and creative direction that make a brand look sharp before it launches, pitches or sells.',
    includes: ['Logo & identity systems', 'UI/UX for web and apps', 'Campaign & social creatives', 'Photo & film direction'],
    deliverables: ['Moodboard', 'Brand direction', 'Design system', 'Asset kit'],
  },
  {
    title: 'Digital Growth',
    group: 'Marketing' as 'Marketing' | 'Technology',
    pitch: 'SEO, ads and social media that turn attention into paying customers.',
    summary: 'SEO, campaigns and content systems that turn attention into qualified customers, measured every month.',
    includes: ['SEO strategy & on-page work', 'Lead-generation funnels', 'Paid ads & social management', 'Tracking & conversion testing'],
    deliverables: ['Growth audit', 'Campaign plan', 'Content calendar', 'Monthly report'],
  },
  {
    title: 'Photo & Film',
    group: 'Marketing' as 'Marketing' | 'Technology',
    pitch: 'Original photos and video, so your brand never has to borrow stock.',
    summary: 'Product, corporate and event shoots that give every campaign original imagery instead of stock photos.',
    includes: ['Product & catalogue photography', 'Corporate & aerial shoots', 'Event photography & videography', 'Reels & short-form video'],
    deliverables: ['Shot list', 'Shoot day', 'Edited photos', 'Final films & reels'],
  },
  {
    title: 'Events & Exhibitions',
    group: 'Marketing' as 'Marketing' | 'Technology',
    pitch: 'Stalls, launches and events people remember, from the first sketch to the final day.',
    summary: 'Corporate events, exhibition stalls and brand activations, from the identity and stall design to the day itself.',
    includes: ['Corporate event management', 'Exhibition stall design & fabrication', 'Product launches & activations', 'Event branding, AV & merchandise'],
    deliverables: ['Event concept', 'Stall & branding design', 'Production', 'On-ground team'],
  },
]

export const engagements = [
  { name: 'Launch', text: 'For new brands that need a sharp first website, brand or campaign.', points: ['Clear scope', 'Fast turnaround', 'Launch-ready assets'] },
  { name: 'Scale', text: 'For businesses ready to improve systems, automate work and upgrade their digital operations.', points: ['Custom workflows', 'Integrations', 'Performance focus'] },
  { name: 'Partner', text: 'For ongoing product, marketing and technology support across several growth goals.', points: ['Roadmap support', 'Monthly execution', 'Reporting & iteration'] },
]


export const principles = [
  { title: 'End to end', text: 'From the first conversation to launch and beyond, one team owns the whole journey.' },
  { title: 'AI-integrated', text: 'We use AI where it genuinely helps: to build faster and to make products smarter.' },
  { title: 'Performance first', text: 'Speed, security and scalability are part of the foundation, not an afterthought.' },
]

export const stats = [
  { value: '50+', label: 'Projects launched' },
  { value: '8', label: 'Industries served' },
  { value: '6', label: 'Disciplines, one team' },
]

export type Project = {
  name: string
  category: string
  tags: string[]
  blurb: string
  url: string
  host: string
  image: string
}

export const featuredProjects: Project[] = [
  {
    name: 'HeyBuds',
    category: 'AI SaaS',
    tags: ['Website', 'UI/UX'],
    blurb: 'A conversion-focused home for AI employees that answer, book and follow up around the clock.',
    url: 'https://www.heybuds.in/',
    host: 'heybuds.in',
    image: '/work/heybuds-hero.jpg',
  },
  {
    name: 'Vinayaka Perfumery',
    category: 'E-commerce',
    tags: ['Store', 'Product experience'],
    blurb: 'A product-led fragrance store built for discovery, trust and purchase intent.',
    url: 'https://vinayakaperfumery.com',
    host: 'vinayakaperfumery.com',
    image: '/work/vinayaka-perfumery.jpg',
  },
  {
    name: 'Moon N Lotus',
    category: 'Lifestyle e-commerce',
    tags: ['Store', 'Creative direction'],
    blurb: 'A serene shopping experience with catalogue browsing and visual storytelling.',
    url: 'https://moonnlotus.com',
    host: 'moonnlotus.com',
    image: '/work/moon-n-lotus.jpg',
  },
  {
    name: 'Ridgecrest Financial',
    category: 'Finance',
    tags: ['Website', 'Finance UX'],
    blurb: 'A finance website built around clarity, confidence and a fast path to funding.',
    url: 'https://ridgecrestfg.com',
    host: 'ridgecrestfg.com',
    image: '/work/ridgecrest.jpg',
  },
]

export const moreProjects: Project[] = [
  {
    name: 'UF Group',
    category: 'Industrial',
    tags: ['Multilingual site'],
    blurb: '',
    url: 'https://ufgroup.in',
    host: 'ufgroup.in',
    image: '/work/uf-group.jpg',
  },
  {
    name: 'The Authentic Bihar',
    category: 'Food & culture commerce',
    tags: ['E-commerce'],
    blurb: '',
    url: 'https://theauthenticbihar.com',
    host: 'theauthenticbihar.com',
    image: '/work/authentic-bihar.jpg',
  },
  {
    name: 'Umadi Foods',
    category: 'Food brand',
    tags: ['Website'],
    blurb: '',
    url: 'https://umadifoods.com',
    host: 'umadifoods.com',
    image: '/work/umadi-foods.jpg',
  },
]

export const process = [
  { title: 'Discover', text: 'We learn your business, audience, current systems and the result you want.' },
  { title: 'Plan', text: 'Goals become a practical scope, timeline, user flow and roadmap.' },
  { title: 'Design', text: 'We shape the experience visually and structurally before building.' },
  { title: 'Build', text: 'We develop, integrate and test it for real users.' },
  { title: 'Launch', text: 'We deploy carefully, watch early results and plan the next improvement.' },
]

export type Founder = { name: string; role: string; focus: string[]; bio: string; photo: string }

export const founders: Founder[] = [
  {
    name: 'Yash Choudhary',
    role: 'Co-Founder & CEO',
    focus: ['Vision', 'Strategy', 'Partnerships'],
    bio: 'Sets the direction for Innovatix and leads every client partnership, turning business goals into clear roadmaps and making sure each project delivers measurable results.',
    photo: '/team/yash-choudhary-cutout.png',
  },
  {
    name: 'Sanchita Dhariwal',
    role: 'Co-Founder & CMO',
    focus: ['Brand', 'Marketing', 'Growth'],
    bio: 'Leads brand and marketing, from identity and campaigns to SEO and social, building the strategies that turn attention into qualified customers and lasting client trust.',
    photo: '/team/sanchita-dhariwal-cutout.png',
  },
  {
    name: 'Vishal Patil',
    role: 'Co-Founder & CTO',
    focus: ['Technology', 'Engineering', 'AI'],
    bio: 'Leads technology and engineering, architecting the software, AI workflows and platforms behind every build so they are fast, secure and ready to scale.',
    photo: '/team/vishal-patil-cutout.png',
  },
]

export const serviceOptions = [...services.map((s) => s.title), 'Something else']
