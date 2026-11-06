import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The site is fully static; every page is pre-rendered to HTML at build time.
  images: { unoptimized: true },
  // Let phones on the same Wi-Fi load the dev server (npm run dev).
  allowedDevOrigins: ['192.168.1.235'],
  // Pages from the 1.0 site, so old links and search results still land somewhere useful.
  redirects: async () => [
    { source: '/team', destination: '/about', permanent: true },
    { source: '/projects', destination: '/work/portfolio', permanent: true },
  ],
}

export default nextConfig
