'use client'

import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    async function animate() {
      const { gsap } = await import('gsap')
      if (!headlineRef.current) return
      
      const words = headlineRef.current.querySelectorAll('.word')
      gsap.fromTo(
        words,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.13, ease: 'power3.out' }
      )
    }
    animate()
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', height: '100dvh', overflow: 'hidden', background: 'var(--bg)' }}>
      <Navbar />
      <HeroCanvas />
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6vw', height: '100%' }}>
        <h1 ref={headlineRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', margin: 0 }}>
          {'Where Space Becomes Story'.split(' ').map((word, i) => (
            <span key={i} className="word" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-hero)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, color: 'var(--text)', opacity: 0 }}>
              {word}
            </span>
          ))}
        </h1>
        
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text-muted)', marginTop: 24, opacity: 0, animation: 'fadeIn 600ms ease 900ms forwards' }}>
          Projection Mapping · VR · Interactive Worlds
        </h2>
        
        <div style={{ marginTop: 40, opacity: 0, animation: 'fadeIn 600ms ease 1100ms forwards' }}>
          <button 
            onClick={() => {
              const workSection = document.getElementById('about');
              workSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ 
              background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: 999, 
              fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, 
              transition: 'filter 200ms ease' 
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            Enter the Experience
          </button>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 1, animation: 'bounce 2s ease-in-out infinite' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
