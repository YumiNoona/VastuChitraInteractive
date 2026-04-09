'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Slide23_IndianMarket() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        padding: '4%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 32 }}>
        Indian Gaming Market
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
          <AnimatedCounter prefix="$" value={3.7} suffix="B" label="Revenue (2024)" />
        </div>
        <div style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
          <AnimatedCounter prefix="$" value={9.1} suffix="B" label="Projected by 2029" />
        </div>
        <div style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
          <AnimatedCounter value={570} suffix="M+" label="Total Gamers" />
        </div>
        <div style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
          <AnimatedCounter value={79} suffix="%" label="Mobile Share" />
        </div>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)',
          textAlign: 'center', maxWidth: 640, margin: '28px auto 0', lineHeight: 1.85,
          opacity: isVisible ? 1 : 0, transition: 'opacity 600ms ease 300ms',
        }}
      >
        India is the world&apos;s second-largest gaming market by user count. Mobile gaming dominates,
        but PC and console segments are growing rapidly as infrastructure and purchasing power increase.
      </p>
    </div>
  )
}
