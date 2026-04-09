'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const games = [
  { name: 'Raji: An Ancient Epic', desc: 'A stunning action-adventure rooted in Indian mythology. Hand-painted environments inspired by Rajasthani and Pahari art.', gradient: 'linear-gradient(135deg, #8B2500 0%, #4A1400 50%, #1A0800 100%)' },
  { name: 'Unleash the Avatar', desc: 'Open-world RPG exploring ancient Indian civilizations with photorealistic environments and spiritual mechanics.', gradient: 'linear-gradient(135deg, #0A3D2E 0%, #061F17 50%, #020D0A 100%)' },
  { name: 'Venba', desc: 'A narrative cooking game about an Indian immigrant family. Emotionally rich storytelling through food and culture.', gradient: 'linear-gradient(135deg, #C98A1A 0%, #8B5E00 40%, #3A2700 100%)' },
]

export default function Slide15_IndianGames() {
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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 24 }}>
        Indian Games Leading the Way
      </h2>

      <div style={{ display: 'flex', gap: 20 }}>
        {games.map((game, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'scale(1)' : 'scale(0.92)',
              transition: `all 500ms ease ${120 * i}ms`,
              cursor: 'default',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1.5px solid transparent',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ aspectRatio: '16/9', background: game.gradient }} />
            <div style={{ padding: '14px 16px', background: 'var(--bg-card)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--text)', textAlign: 'center' }}>
                {game.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 8, lineHeight: 1.6 }}>
                {game.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
