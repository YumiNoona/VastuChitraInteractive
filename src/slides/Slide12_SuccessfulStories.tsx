'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

const timeline = [
  { num: 1, title: 'AAA — Prince of Persia', desc: 'Massive open world, cutting-edge visuals, 200+ person team. Shows the pinnacle of game production scale.' },
  { num: 2, title: 'AA — Raji: An Ancient Epic', desc: 'Mid-scale production with high visual fidelity. Proves Indian studios can compete globally with focused ambition.' },
  { num: 3, title: 'Indie — Hollow Knight: Silksong', desc: 'Small team, enormous impact. Handcrafted art and design that rivals studios 50x their size.' },
]

export default function Slide12_SuccessfulStories() {
  const { ref, visibleCount } = useStaggerReveal(3, 200)

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '55%', padding: '4%', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 24 }}>
          Production Scale
        </h2>
        <div style={{ position: 'relative', paddingLeft: 24 }}>
          <div style={{ position: 'absolute', left: 8, top: 0, width: 2, background: 'var(--accent)', height: visibleCount > 0 ? '100%' : '0%', transition: 'height 800ms ease' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  opacity: i < visibleCount ? 1 : 0,
                  transition: `opacity 500ms ease ${200 * i}ms`,
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-card)', border: '2px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--accent)',
                }}>
                  {item.num}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)' }}>{item.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 4 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CircleMaskImage src="/images/slides/slide12.jpg" alt="Game production" />
    </div>
  )
}
