'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const genres = [
  { name: 'Action', gradient: 'linear-gradient(135deg, #8B2500 0%, #3A0F00 100%)' },
  { name: 'RPG', gradient: 'linear-gradient(135deg, #1A4A2E 0%, #0A1F14 100%)' },
  { name: 'Strategy', gradient: 'linear-gradient(135deg, #4A3800 0%, #1F1700 100%)' },
  { name: 'Puzzle', gradient: 'linear-gradient(135deg, #2E1A4A 0%, #140A1F 100%)' },
]

const styles = [
  { name: '2D', gradient: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)' },
  { name: '3D', gradient: 'linear-gradient(135deg, #7B3F00 0%, #3A1F00 60%, #1A0A00 100%)' },
  { name: '2.5D', gradient: 'linear-gradient(135deg, #3A5540 0%, #1F2E24 100%)' },
]

export default function Slide08_TypesOfGames() {
  const { ref, visibleCount } = useStaggerReveal(7, 80)

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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 8 }}>
        Types of Games
      </h2>

      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12, marginTop: 16 }}>
        By Genre
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {genres.map((g, i) => (
          <div key={i} style={{ opacity: i < visibleCount ? 1 : 0, transform: i < visibleCount ? 'scale(1)' : 'scale(0.92)', transition: 'opacity 400ms ease, transform 400ms ease' }}>
            <div style={{ aspectRatio: '16/9', borderRadius: 8, background: g.gradient }} />
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', textAlign: 'center', marginTop: 8 }}>{g.name}</div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12, marginTop: 20 }}>
        By Visual Style
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {styles.map((s, i) => {
          const idx = i + 4
          return (
            <div key={i} style={{ opacity: idx < visibleCount ? 1 : 0, transform: idx < visibleCount ? 'scale(1)' : 'scale(0.92)', transition: 'opacity 400ms ease 300ms, transform 400ms ease 300ms' }}>
              <div style={{ aspectRatio: '16/9', borderRadius: 8, background: s.gradient }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', textAlign: 'center', marginTop: 8 }}>{s.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
