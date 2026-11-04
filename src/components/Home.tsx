'use client'

import { useState } from 'react'
import { introDelay } from '../lib/intro'
import About from './About'
import ChaosHero from './chaos/ChaosHero'
import Contact from './Contact'
import Intro from './Intro'
import LogoRibbon from './LogoRibbon'
import Services from './Services'
import FeaturedWork from './Work'

export default function Home() {
  // Entrance timing only (never markup), so the server default of 0 is safe.
  const [delay] = useState(introDelay)

  return (
    <>
      <Intro />
      <ChaosHero delay={delay} />
      <Services />
      <FeaturedWork />
      <About />
      <LogoRibbon />
      <Contact />
    </>
  )
}
