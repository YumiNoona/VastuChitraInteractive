'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const games = [
  { 
    name: 'Raji: An Ancient Epic', 
    desc: 'A stunning action-adventure rooted in Indian mythology. Hand-painted environments inspired by Rajasthani and Pahari art.', 
    image: '/images-videos/Slide-15-Raji.png' 
  },
  { 
    name: 'Unleash the Avatar', 
    desc: 'Open-world RPG exploring ancient Indian civilizations with photorealistic environments and spiritual mechanics.', 
    image: '/images-videos/Slide-15-Unleash.png' 
  },
  { 
    name: 'Venba', 
    desc: 'A narrative cooking game about an Indian immigrant family. Emotionally rich storytelling through food and culture.', 
    image: '/images-videos/Slide-15-Venba.png' 
  },
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
        padding: '3% 4%',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 20 }}>
        Indian Games Leading the Way
      </h2>

      <div style={{ display: 'flex', gap: 16 }}>
        {games.map((game, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'scale(1)' : 'scale(0.94)',
              transition: `all 500ms ease ${120 * i}ms`,
              cursor: 'default',
              borderRadius: 10,
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1.5px solid var(--border)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
              <img src={game.image} alt={game.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '12px 14px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 600, color: 'var(--text)', textAlign: 'center' }}>
                {game.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 4, lineHeight: 1.6 }}>
                {game.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
