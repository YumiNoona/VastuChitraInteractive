'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import { useStaggerReveal, useScrollReveal } from '@/hooks/useScrollReveal'

const actions = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    text: 'Donated €500,000 to Notre-Dame restoration fund',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    text: 'Gave AC Unity away free — 3 million downloads in a week',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    text: 'Sparked global interest in architectural preservation through games',
  },
]

export default function Slide14_ACUnity() {
  const { ref: actionsRef, visibleCount } = useStaggerReveal(3, 150)
  const { ref: mainRef, isVisible } = useScrollReveal()

  return (
    <div
      ref={mainRef}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '55%', padding: '3% 4%', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 32px)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 16 }}>
          Case Study: Assassin&apos;s Creed Unity & Notre-Dame
        </h2>

        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          <div
            style={{
              flex: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 500ms ease',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', marginBottom: 6 }}>The Viral Claim</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              &ldquo;Ubisoft&apos;s 3D scan of Notre-Dame could help rebuild the cathedral.&rdquo;
            </p>
          </div>
          <div style={{ width: 1, background: 'var(--border-strong)', flexShrink: 0 }} />
          <div
            style={{
              flex: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 500ms ease',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', marginBottom: 6 }}>The Truth</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Ubisoft used artistic reference, not architectural-grade scans. Still, their contribution was historic.
            </p>
          </div>
        </div>

        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)', marginBottom: 10 }}>
          What Ubisoft Actually Did
        </div>
        <div ref={actionsRef} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {actions.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 400ms ease',
              }}
            >
              <div style={{ flexShrink: 0 }}>{a.icon}</div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6 }}>{a.text}</span>
            </div>
          ))}
        </div>
      </div>
      <CircleMaskImage src="/images/slides/slide14.jpg" alt="Notre-Dame" />
    </div>
  )
}
