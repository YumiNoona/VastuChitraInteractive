'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'

const studios = [
  { studioLabel: 'Nodding Heads Games', name: 'Raji: An Ancient Epic', teamSize: '15', devTime: '4 years', revenue: '₹5-8 Cr', revenueVal: 5, revSuffix: '-8 Cr', revPrefix: '₹', achievement: 'First Indian game at E3. Featured on Nintendo Direct.' },
  { studioLabel: 'Team Cherry', name: 'Hollow Knight', teamSize: '3', devTime: '3 years', revenue: '$6M+', revenueVal: 6, revSuffix: 'M+', revPrefix: '$', achievement: 'Over 3 million copies sold. Became a genre-defining title.' },
  { studioLabel: 'InnerSloth', name: 'Among Us', teamSize: '3', devTime: '2 years', revenue: '$100M+', revenueVal: 100, revSuffix: 'M+', revPrefix: '$', achievement: 'Cultural phenomenon with 500M+ downloads worldwide.' },
]

export default function Slide11_SmallTeams() {
  const { ref, visibleCount } = useStaggerReveal(3, 120)

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
        Small Teams. Big Impact.
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 8, marginBottom: 24 }}>
        You don&apos;t need a 200-person studio to make a world-class game.
      </p>

      <div style={{ display: 'flex', gap: 16 }}>
        {studios.map((studio, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: 'var(--bg-card)',
              borderRadius: 10,
              padding: '20px 18px',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 400ms ease, transform 400ms ease, border-top 200ms',
              cursor: 'default',
              borderTop: '2px solid transparent',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderTop = '2px solid var(--accent)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderTop = '2px solid transparent' }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
              {studio.studioLabel}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)', marginBottom: 16 }}>
              {studio.name}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)' }}>{studio.teamSize}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)' }}>Team Size</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)' }}>{studio.devTime}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)' }}>Dev Time</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)' }}>{studio.revenue}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)' }}>Revenue</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
              {studio.achievement}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
