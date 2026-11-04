import type { Metadata, Viewport } from 'next'
import { Caveat, Inter, Inter_Tight, Manrope, Playfair_Display, Sora } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Providers from '../components/Providers'
import { introBootScript } from '../lib/intro'
import { SITE_URL } from '../lib/site'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter-tight', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic'], weight: ['400', '500'], variable: '--font-playfair', display: 'swap' })
const caveat = Caveat({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-caveat', display: 'swap' })
const sora = Sora({ subsets: ['latin'], weight: ['600'], variable: '--font-sora', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Innovatix Technology | Ideas that sell. Code that scales.',
    template: '%s | Innovatix Technology',
  },
  description:
    'Innovatix Technology designs, builds and grows digital products: websites, software, AI workflows, branding, social media and marketing, under one roof.',
  icons: { icon: '/innovatix-icon.png', apple: '/innovatix-icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Innovatix Technology',
    images: [{ url: '/work/heybuds-hero.jpg', width: 1600, height: 1000 }],
  },
}

export const viewport: Viewport = { themeColor: '#F6F5F1' }

export default function RootLayout({ children }: { children: ReactNode }) {
  const fonts = [inter, interTight, playfair, caveat, sora, manrope].map((f) => f.variable).join(' ')
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      </head>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
