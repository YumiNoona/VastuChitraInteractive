'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const rules = [
  { title: 'No Predatory Monetisation', body: 'Design revenue models that respect the player. Avoid loot boxes that target children and vulnerable populations.' },
  { title: 'No Addiction by Design', body: 'Build engagement through quality, not manipulation. Dark patterns and artificial time-gating erode trust.' },
  { title: 'Respect Player Time', body: 'Value the hours players invest. Don\'t pad content or create artificial grind to inflate playtime metrics.' },
  { title: 'Protect Young Players', body: 'Implement proper age-gating, parental controls, and content warnings. Children deserve safe play spaces.' },
  { title: 'Be Honest About Odds', body: 'If your game includes random rewards, publish the actual probabilities. Transparency builds player trust.' },
  { title: 'Know When Enough is Enough', body: 'Build systems that encourage players to take breaks. Healthy gaming habits start with responsible design.' },
]

export default function Slide24_EthicalGaming() {
  const { ref, visibleCount } = useStaggerReveal(6, 80)

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        padding: '4%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 24 }}>
        Ethical Gaming Rules
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, flex: 1 }}>
        {rules.map((rule, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 10,
              padding: '18px 16px',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'scale(1)' : 'scale(0.94)',
              transition: 'all 400ms ease',
              cursor: 'default',
              borderTop: '2px solid transparent',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderTopColor = 'var(--accent-3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderTopColor = 'transparent' }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-3)', marginBottom: 8 }}>
              {rule.title}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {rule.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
