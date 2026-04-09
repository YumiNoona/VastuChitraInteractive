'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const studios = [
  { studio: 'Nodding Heads Games', game: 'Raji: An Ancient Epic — Sequel', desc: 'Expanding the mythos with new regions of India and more refined combat.', gradient: 'linear-gradient(180deg, #0A3D2E 0%, #051F15 100%)' },
  { studio: 'Tara Gaming', game: 'Upcoming Title', desc: 'Exploring Indian folklore through a unique art style and narrative-driven gameplay.', gradient: 'linear-gradient(180deg, #8B5E00 0%, #3A2700 100%)' },
  { studio: 'Aeos Games', game: 'In Development', desc: 'A AAA-quality action game rooted in Indic mythology with a focus on architectural authenticity.', gradient: 'linear-gradient(180deg, #8B1A1A 0%, #3A0808 100%)' },
]

export default function Slide16_OngoingStudio() {
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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 24 }}>
        Studios to Watch
      </h2>

      <div style={{ display: 'flex', gap: 20 }}>
        {studios.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 500ms ease ${150 * i}ms`,
            }}
          >
            <div
              style={{ aspectRatio: '16/9', borderRadius: 8, background: s.gradient, cursor: 'default', transition: 'transform 300ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            />
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent-2)', marginTop: 12, textAlign: 'center' }}>
              {s.studio}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--text)', textAlign: 'center', marginTop: 4 }}>
              {s.game}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 6, lineHeight: 1.6 }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
