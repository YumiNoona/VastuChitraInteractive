'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const practices = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Projection Mapping',
    desc: 'We map light and narrative onto physical architecture, turning walls into living canvases.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12v.01" />
        <path d="M7 12v.01" />
        <path d="M17 12v.01" />
      </svg>
    ),
    title: 'VR & Spatial Computing',
    desc: 'Immersive VR environments that collapse the boundary between digital and physical space.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l10 5v10l-10 5-10-5V7z" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <line x1="22" y1="7" x2="12" y2="12" />
        <line x1="2" y1="7" x2="12" y2="12" />
      </svg>
    ),
    title: 'Game Design',
    desc: 'Narrative-driven games rooted in Indian heritage, built for global audiences.',
  },
]

export default function Work() {
  const { ref, visibleCount } = useStaggerReveal(3, 120)

  return (
    <section id="work" className="section-container" style={{ padding: '80px 6vw', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 48 }}>
        Our Practice
      </div>
      
      <div 
        ref={ref}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 24 
        }}
      >
        {practices.map((practice, i) => (
          <div 
            key={i}
            style={{
              background: 'var(--bg-card)',
              borderTop: '3px solid var(--accent)',
              borderRight: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              borderLeft: '1px solid var(--border)',
              borderRadius: 10,
              padding: '28px 24px',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 400ms ease, border-color 250ms ease, transform 250ms ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderTopColor = 'var(--accent-2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderTopColor = 'var(--accent)'
            }}
          >
            <div style={{ marginBottom: 20, opacity: 0.9 }}>{practice.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)', marginBottom: 12 }}>
              {practice.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {practice.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
