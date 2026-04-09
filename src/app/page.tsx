'use client'

import React, { useEffect, Suspense } from 'react'

const Hero = React.lazy(() => import('@/sections/Hero'))
const About = React.lazy(() => import('@/sections/About'))
const Work = React.lazy(() => import('@/sections/Work'))
const Studio = React.lazy(() => import('@/sections/Studio'))
const Contact = React.lazy(() => import('@/sections/Contact'))

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.setAttribute('data-reduced-motion', 'true')
    }
  }, [])

  return (
    <main>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <Work />
      </Suspense>
      <Suspense fallback={null}>
        <Studio />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </main>
  )
}
