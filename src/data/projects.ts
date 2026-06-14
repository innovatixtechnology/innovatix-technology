export type Project = {
  title: string;
  category: string;
  summary: string;
  services: string[];
  url: string;
  domain: string;
  accent: string;
  coverImage?: string;
};

export const projects: Project[] = [
  {
    title: "Klean Company",
    category: "Service Website",
    summary: "A clear, trust-focused web presence for a service brand, structured to convert visitors into inquiries.",
    services: ["Website Development", "UI/UX Design", "Brand Presence"],
    url: "https://kleancompany.in",
    domain: "kleancompany.in",
    accent: "from-sky-500 to-emerald-400",
    coverImage: "/projects/klean-company.webp",
  },
  {
    title: "Siddhi Vinayak Groups",
    category: "Corporate Website",
    summary: "A responsive business website that presents group offerings with clean navigation and strong credibility cues.",
    services: ["Website Development", "Responsive UI", "Content Structure"],
    url: "https://siddivinayak-groups.vercel.app",
    domain: "siddivinayak-groups.vercel.app",
    accent: "from-orange-500 to-amber-300",
    coverImage: "/projects/siddhi-vinayak-groups.webp",
  },
  {
    title: "Ridgecrest Financial Group",
    category: "Finance Website",
    summary: "A professional finance-sector website built around clarity, confidence, and easy access to service information.",
    services: ["Website Development", "Finance UX", "Performance"],
    url: "https://ridgecrestfg.com",
    domain: "ridgecrestfg.com",
    accent: "from-blue-600 to-cyan-400",
    coverImage: "/projects/ridgecrest-financial-group.webp",
  },
  {
    title: "Anthill Ventures",
    category: "Startup & Investment",
    summary: "A polished venture-focused digital experience for communicating programs, portfolio value, and founder support.",
    services: ["Website Development", "Strategy", "UI/UX Design"],
    url: "https://anthillventures.com",
    domain: "anthillventures.com",
    accent: "from-rose-500 to-violet-500",
    coverImage: "/projects/anthill-ventures.webp",
  },
  {
    title: "UF Group",
    category: "Industrial Website",
    summary: "A multilingual industrial website experience designed to make company information and offerings easier to explore.",
    services: ["Website Development", "Corporate UX", "Information Architecture"],
    url: "https://www.ufgroup.in/en",
    domain: "ufgroup.in",
    accent: "from-slate-700 to-lime-400",
    coverImage: "/projects/uf-group.webp",
  },
  {
    title: "Vinayaka Perfumery",
    category: "E-commerce Website",
    summary: "A product-led commerce website for fragrance discovery, built to support browsing, trust, and purchase intent.",
    services: ["E-commerce", "Website Development", "Product Experience"],
    url: "https://www.vinayakaperfumery.com",
    domain: "vinayakaperfumery.com",
    accent: "from-fuchsia-500 to-pink-300",
    coverImage: "/projects/vinayaka-perfumery.webp",
  },
  {
    title: "ImpactSure",
    category: "AI & Enterprise Tech",
    summary: "An enterprise technology website presenting AI capabilities, industry value, and solution depth with authority.",
    services: ["Website Development", "Enterprise UX", "AI Positioning"],
    url: "https://www.impactsure.com",
    domain: "impactsure.com",
    accent: "from-indigo-600 to-teal-400",
    coverImage: "/projects/impactsure.webp",
  },
  {
    title: "Moon N Lotus",
    category: "Lifestyle E-commerce",
    summary: "A serene product-commerce experience tailored for a lifestyle brand with catalog browsing and visual storytelling.",
    services: ["E-commerce", "Product Pages", "Creative Direction"],
    url: "http://moonnlotus.com",
    domain: "moonnlotus.com",
    accent: "from-violet-500 to-rose-300",
    coverImage: "/projects/moon-n-lotus.webp",
  },
  {
    title: "The Authentic Bihar",
    category: "Food & Culture Commerce",
    summary: "A regional food brand website that highlights authentic products, cultural identity, and customer trust.",
    services: ["E-commerce", "Brand Storytelling", "Website Development"],
    url: "https://theauthenticbihar.com",
    domain: "theauthenticbihar.com",
    accent: "from-red-600 to-amber-300",
    coverImage: "/projects/the-authentic-bihar.webp",
  },
  {
    title: "Umadi Foods",
    category: "Food Brand Website",
    summary: "A food business web presence shaped for product discovery, brand recall, and simple customer engagement.",
    services: ["Website Development", "Food Brand UX", "Responsive UI"],
    url: "https://umadifoods.com",
    domain: "umadifoods.com",
    accent: "from-lime-600 to-orange-300",
    coverImage: "/projects/umadi-foods.webp",
  },
];
