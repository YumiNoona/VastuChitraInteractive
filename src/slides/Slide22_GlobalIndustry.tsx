'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Slide22_GlobalIndustry() {
  return (
    <div
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
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 8 }}>
          Global Gaming Industry
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
          The global gaming industry is the largest entertainment sector on earth, surpassing film and music combined.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <AnimatedCounter prefix="$" value={240} suffix="B" label="Market Value" caption="Projected to exceed $300B by 2027" />
          <AnimatedCounter value={3.2} suffix="B" label="Players Worldwide" caption="Over 40% of global population" />
          <AnimatedCounter value={12} suffix="%" label="Annual Growth" caption="Consistently outpacing other sectors" />
        </div>
      </div>
      <CircleMaskImage src="/images/slides/slide22.jpg" alt="Global gaming" />
    </div>
  )
}
