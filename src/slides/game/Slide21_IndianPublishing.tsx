'use client'

import AnimatedBarChart from '@/components/AnimatedBarChart'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const chartData = [
  { label: 'Google Play', value: 72, color: 'var(--accent-3)' },
  { label: 'App Store', value: 65, color: 'var(--accent-3)' },
  { label: 'Steam', value: 38, color: 'var(--accent-2)' },
  { label: 'Epic Games', value: 12, color: 'var(--accent-2)' },
  { label: 'PlayStation', value: 9, color: 'var(--text-muted)' },
  { label: 'Xbox Store', value: 8, color: 'var(--text-muted)' },
  { label: 'Nintendo', value: 6, color: 'var(--text-muted)' },
]

const groupLabels = [
  { label: 'Mobile', span: 2 },
  { label: 'PC', span: 2 },
  { label: 'Console', span: 3 },
]

export default function Slide21_IndianPublishing() {
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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 20 }}>
        Where Indian Studios Publish
      </h2>

      <div style={{ display: 'flex', gap: 32 }}>
        <div style={{ flex: '0 0 62%' }}>
          <AnimatedBarChart data={chartData} maxValue={100} unit="%" showGroupLabels={groupLabels} />
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', lineHeight: 1.85,
              opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 600ms ease 500ms',
            }}
          >
            Mobile dominates the Indian publishing landscape, with Google Play and App Store accounting
            for the majority of releases. However, Steam is rapidly growing as Indian studios target
            global PC audiences. Console presence remains limited but is increasing with each passing year.
          </p>
        </div>
      </div>
    </div>
  )
}
