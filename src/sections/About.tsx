'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import WordCycler from '@/components/WordCycler'

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.3)

  return (
    <section id="about" ref={sectionRef} className="section-container" style={{ padding: '120px 6vw', background: 'var(--bg)' }}>
      <div 
        style={{ 
          background: 'var(--bg-card)', 
          borderRadius: 16, 
          padding: '8vw',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 60,
          border: '1px solid var(--border)',
        }}
      >
        <div 
          style={{ 
            flex: '1 1 300px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 800ms ease, transform 800ms ease',
          }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.025em' }}>
            <WordCycler words={["Unreal Engine", "ArchViz", "Real-Time 3D", "Interactive", "Architecture", "Rendering"]} interval={2000} />
          </div>
          <div style={{ width: 48, height: 2, background: 'var(--accent)', marginTop: 24 }} />
        </div>
        
        <div 
          style={{ 
            flex: '1 1 400px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 800ms ease 100ms, transform 800ms ease 100ms',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: 600 }}>
            We are a high-end visualization and interactive studio. Specializing in Unreal Engine, 3D modeling, and real-time rendering, we build immersive digital environments and architectural visualizations for global clients.
          </p>
        </div>
      </div>
    </section>
  )
}
