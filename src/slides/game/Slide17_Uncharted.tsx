'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

const sections = [
  { title: 'The Architecture', body: 'Uncharted: The Lost Legacy features Hoysala temple architecture rendered with extraordinary fidelity. Each column, relief sculpture, and spatial proportion references real structures from 12th-century Karnataka.' },
  { title: 'Why It Matters', body: 'Games preserve architectural heritage in interactive form. Millions of players experience Indian temple architecture who may never visit Belur or Halebidu in person.' },
  { title: 'The Lesson for Indian Developers', body: 'India\'s built heritage is a goldmine of game environments. Dravidian, Mughal, Rajput, and Buddhist architectural traditions offer visual languages no other culture can replicate.' },
]

export default function Slide17_Uncharted() {
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
      <div style={{ width: '55%', padding: '4%', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
          Case Study: Uncharted
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 500ms ease ${200 * i}ms`,
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', marginBottom: 4 }}>
                {s.title}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <CircleMaskImage src="/images-videos/Slide-17.jpg" alt="Uncharted: The Lost Legacy Hoysala Architecture" />
    </div>
  )
}
