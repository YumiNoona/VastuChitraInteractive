'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  label?: string
  caption?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  label,
  caption,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal()
  const displayValue = useAnimatedCounter(value, duration, isVisible)

  const isDecimal = value % 1 !== 0

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--t-display)',
          fontWeight: 600,
          color: 'var(--accent-2)',
          letterSpacing: '-0.025em',
        }}
      >
        {prefix}
        {isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue)}
        {suffix}
      </div>
      {label && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-label)',
            fontWeight: 600,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: 8,
          }}
        >
          {label}
        </div>
      )}
      {caption && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-small)',
            color: 'var(--text-muted)',
            marginTop: 4,
            opacity: 0.7,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  )
}
