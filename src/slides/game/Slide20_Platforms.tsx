'use client'

import AnimatedBarChart from '@/components/AnimatedBarChart'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const chartData = [
  { label: 'Steam', value: 30 },
  { label: 'Epic Games', value: 12 },
  { label: 'PlayStation', value: 30 },
  { label: 'Xbox Store', value: 30 },
  { label: 'Google Play', value: 14, color: 'var(--accent-3)' },
  { label: 'App Store', value: 14, color: 'var(--accent-3)' },
]

const revenueModels = [
  'Free-to-Play + In-App Purchases',
  'Premium (one-time purchase)',
  'Subscription (Game Pass, PS+)',
  'DLC & Season Passes',
]

export default function Slide20_Platforms() {
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
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 4 }}>
        Publishing Platforms
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', marginBottom: 20 }}>
        Platform commission rates and revenue model overview.
      </p>

      <div style={{ display: 'flex', gap: 32 }}>
        <div style={{ flex: '0 0 58%' }}>
          <AnimatedBarChart data={chartData} maxValue={32} unit="%" />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)', marginBottom: 12 }}>
            Key Revenue Models
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {revenueModels.map((m, i) => (
              <li
                key={i}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', paddingLeft: 16, position: 'relative', lineHeight: 1.6,
                  opacity: isVisible ? 1 : 0, transition: `opacity 400ms ease ${200 + i * 100}ms`,
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>·</span>
                {m}
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 16, padding: '12px 16px', borderRadius: 8,
              background: 'var(--accent-2-dim)', border: '1px solid var(--accent-2)',
              fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', lineHeight: 1.6,
              opacity: isVisible ? 1 : 0, transition: 'opacity 600ms ease 600ms',
            }}
          >
            <strong>Tip:</strong> For a 2.5D indie launch, Steam (30% cut) + Mobile (15–30%) is the recommended dual-platform strategy.
          </div>
        </div>
      </div>
    </div>
  )
}
