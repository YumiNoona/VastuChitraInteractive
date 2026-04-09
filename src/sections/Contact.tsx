'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

export default function Contact() {
  const { ref, visibleCount } = useStaggerReveal(4, 150)

  return (
    <section id="contact" style={{ position: 'relative', background: 'var(--bg)', padding: '120px 6vw', overflow: 'hidden' }}>
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '-4vw', 
          right: '-2vw', 
          fontFamily: 'var(--font-display)', 
          fontSize: '28vw', 
          fontWeight: 700, 
          color: 'var(--text-faint)', 
          opacity: 0.04, 
          zIndex: 0, 
          pointerEvents: 'none', 
          userSelect: 'none', 
          lineHeight: 1 
        }}
      >
        VC
      </div>
      
      <div ref={ref} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div 
          style={{ 
            fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24,
            opacity: visibleCount > 0 ? 1 : 0, transform: visibleCount > 0 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease' 
          }}
        >
          Get In Touch
        </div>
        
        <h2 
          style={{ 
            fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 56,
            opacity: visibleCount > 1 ? 1 : 0, transform: visibleCount > 1 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 600ms ease' 
          }}
        >
          Let's Build a World
        </h2>
        
        <a 
          href="mailto:studio@vastuchitra.com"
          style={{ 
            display: 'inline-block', border: '1.5px solid var(--border-strong)', padding: '16px 40px', borderRadius: 999,
            fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 500, color: 'var(--text)',
            transition: 'all 250ms ease', marginBottom: 64,
            opacity: visibleCount > 2 ? 1 : 0, transform: visibleCount > 2 ? 'translateY(0)' : 'translateY(20px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text)' }}
        >
          studio@vastuchitra.com
        </a>
        
        <div 
          style={{ 
            display: 'flex', gap: 32, marginBottom: 80,
            opacity: visibleCount > 3 ? 1 : 0, transform: visibleCount > 3 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease'
          }}
        >
          {['Instagram', 'Behance', 'LinkedIn'].map(social => (
            <a 
              key={social} href="#" aria-label={social}
              style={{ color: 'var(--text-muted)', transition: 'color 200ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          ))}
        </div>
        
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', color: 'var(--text-faint)', letterSpacing: '0.05em' }}>
          © 2025 Vastu Chitra Interactive · All rights reserved
        </div>
      </div>
    </section>
  )
}
