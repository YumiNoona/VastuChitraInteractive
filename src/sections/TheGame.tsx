'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'
import SlideViewer from '@/components/SlideViewer'
import { slides } from '@/slides/index'

export default function TheGame() {
  const { ref, visibleCount } = useStaggerReveal(3, 150)

  return (
    <section id="the-game" className="section-container" style={{ padding: '80px 6vw 100px', background: 'var(--bg)' }}>
      <div ref={ref}>
        <div 
          style={{ 
            fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
            opacity: visibleCount > 0 ? 1 : 0, transform: visibleCount > 0 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease'
          }}
        >
          The Idea
        </div>
        
        <h2 
          style={{ 
            fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginTop: 12,
            opacity: visibleCount > 1 ? 1 : 0, transform: visibleCount > 1 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease'
          }}
        >
          The Game
        </h2>
        
        <p 
          style={{ 
            fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16, maxWidth: 640,
            opacity: visibleCount > 2 ? 1 : 0, transform: visibleCount > 2 ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease'
          }}
        >
          An immersive journey through game design, Indian heritage, and projection mapping.
        </p>
      </div>

      <div style={{ height: 1, width: '100%', background: 'var(--border)', margin: '40px 0' }} />

      <div style={{ width: '100%', margin: '0 0' }}>
        <SlideViewer />
        {/* Upload your PPT slide images here to populate the viewer: /public/images/slides/slide01.jpg etc. */}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 40 }}>
        <button 
          style={{ 
            padding: '12px 28px', borderRadius: 999, border: '1px solid var(--border-strong)', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', transition: 'all 200ms ease', cursor: 'pointer'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text)' }}
        >
          Download Brief
        </button>
        <div style={{ background: 'var(--bg-card)', padding: '6px 14px', borderRadius: 20, fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {slides.length} Slides
        </div>
      </div>
    </section>
  )
}
