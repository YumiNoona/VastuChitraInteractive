'use client'

import CircleMaskVideo from '@/components/CircleMaskVideo'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

const iconRows = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: 'Explosive Growth',
    caption: 'Consistently outpacing traditional entertainment sectors.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: 'Global Reach',
    caption: 'Connecting diverse audiences across all demographics.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    label: 'Innovation Hub',
    caption: 'Driving advancements in AI, VR, and interactive tech.',
  },
]

export default function Slide03_VideoGameIndustry() {
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
      <div style={{ width: '48%', padding: '4% 4%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--text)' }}>
          Video Game Industry
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: 12 }}>
          The global video game industry has evolved from niche hobby to dominant cultural force,
          generating more revenue than music and film combined.
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {iconRows.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 500ms ease, transform 500ms ease',
              }}
            >
              <div style={{ flexShrink: 0, marginTop: 2 }}>{row.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 600, color: 'var(--text)' }}>
                  {row.label}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {row.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CircleMaskVideo src="/images-videos/Slide-3.mp4" />
    </div>
  )
}
