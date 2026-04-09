'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const panels = [
  { label: '2D Scene', gradient: 'linear-gradient(180deg, #4A5568 0%, #2D3748 100%)', desc: 'Flat, sprite-based rendering with parallax depth layers.' },
  { label: '2.5D Scene', gradient: 'linear-gradient(180deg, #2D5016 0%, #1A3A0A 100%)', desc: '3D geometry rendered from a fixed 2D perspective.' },
  { label: '3D Scene', gradient: 'linear-gradient(180deg, #4A2008 0%, #8B4513 40%, #1A0A02 100%)', desc: 'Full spatial freedom with camera control and depth.' },
]

export default function Slide09_SeeItInAction() {
  const { ref, visibleCount } = useStaggerReveal(3, 150)

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        padding: '4%',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center' }}>
        See It In Action
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 8, marginBottom: 24 }}>
        How the same world can look across different rendering dimensions.
      </p>

      <div style={{ display: 'flex', gap: 0, flex: 1 }}>
        {panels.map((panel, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 500ms ease, transform 500ms ease',
            }}
          >
            {i > 0 && (
              <div style={{
                position: 'absolute', left: 0, top: 0, width: 1, background: 'var(--accent)',
                height: i < visibleCount ? '100%' : '0%', transition: 'height 600ms ease', zIndex: 2,
              }} />
            )}
            <div style={{ position: 'relative', margin: '0 8px' }}>
              <div style={{ aspectRatio: '16/9', borderRadius: 8, background: panel.gradient, position: 'relative' }}>
                <span style={{
                  position: 'absolute', top: 10, left: 10,
                  background: 'rgba(0,0,0,0.6)', color: '#fff',
                  fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600,
                  letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 20,
                }}>
                  {panel.label}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', marginTop: 10, textAlign: 'center', lineHeight: 1.6 }}>
                {panel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
