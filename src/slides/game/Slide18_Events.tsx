'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

const events = [
  { name: 'IGDC', desc: 'India Game Developer Conference — the largest annual gathering of Indian game developers, featuring talks, workshops, and networking.' },
  { name: 'India Gaming Show', desc: 'A consumer-facing expo bridging the gap between gamers and developers, showcasing upcoming Indian titles and hardware.' },
  { name: 'DreamHack India', desc: 'The Indian chapter of the world\'s largest digital festival, combining esports tournaments, cosplay, and indie showcases.' },
]

export default function Slide18_Events() {
  const { ref, visibleCount } = useStaggerReveal(3, 150)

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
      <CircleMaskImage src="/images/slides/slide18.jpg" alt="Gaming events" side="left" />
      <div style={{ width: '55%', marginLeft: '45%', padding: '4%', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 8 }}>
          Events & Government Support
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>
          India&apos;s gaming ecosystem is growing rapidly, supported by industry events, government initiatives, and a passionate community.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {events.map((ev, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateX(0)' : 'translateX(30px)',
                transition: `all 400ms ease ${150 * i}ms`,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)' }}>{ev.name}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 2 }}>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
