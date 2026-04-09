'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const bands = [
  { label: 'World Architecture', desc: 'The macro-level spatial design — entire worlds, regions, and open-world maps.', examples: ['Lordran', 'Paris', 'Hyrule'] },
  { label: 'Level Architecture', desc: 'Room-by-room layouts, puzzle spaces, combat arenas, and gating systems.', examples: ['Linear corridors', 'Hub-and-spoke', 'Open arenas'] },
  { label: 'Environmental Architecture', desc: 'Visual storytelling through props, lighting, architectural dressing, and material language.', examples: ['Gothic ruins', 'Lived-in spaces', 'Sacred geometry'] },
]

const chips = ['Gothic', 'Greek & Roman', 'Japanese', 'Indian & Dravidian', 'Sci-Fi Brutalist', 'Fantasy Medieval']

export default function Slide13_Architecture() {
  const { ref, visibleCount } = useStaggerReveal(9, 50)

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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 4 }}>
        Architecture in Games
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', marginBottom: 20 }}>
        Three tiers of spatial design that define the player&apos;s experience.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
        {bands.map((band, i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px',
              background: 'var(--bg-card)', borderRadius: 8,
              clipPath: i < visibleCount ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: `clip-path 600ms ease ${200 * i}ms`,
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', minWidth: 180, flexShrink: 0 }}>
              {band.label}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', flex: 1, lineHeight: 1.6 }}>
              {band.desc}
            </div>
            <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
              {band.examples.map((ex, j) => (
                <span key={j} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', color: 'var(--accent)', background: 'var(--accent-dim)', padding: '3px 10px', borderRadius: 20 }}>
                  {ex}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {chips.map((chip, i) => {
          const idx = i + 3
          return (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.08em',
                color: 'var(--text-muted)', background: 'var(--bg-card)', border: '1px solid var(--border)',
                padding: '6px 16px', borderRadius: 20,
                transform: idx < visibleCount ? 'scale(1)' : 'scale(0.8)',
                opacity: idx < visibleCount ? 1 : 0,
                transition: `all 300ms ease ${50 * i}ms`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              {chip}
            </span>
          )
        })}
      </div>
    </div>
  )
}
