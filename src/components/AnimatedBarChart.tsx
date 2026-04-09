'use client'

import { useRef, useState, useEffect } from 'react'

interface BarData {
  label: string
  value: number
  color?: string
}

interface GroupLabel {
  label: string
  span: number
}

interface AnimatedBarChartProps {
  data: BarData[]
  maxValue: number
  unit?: string
  showGroupLabels?: GroupLabel[]
}

export default function AnimatedBarChart({
  data,
  maxValue,
  unit = '',
  showGroupLabels,
}: AnimatedBarChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 12,
          height: 200,
          padding: '0 8px',
        }}
      >
        {data.map((item, i) => {
          const heightPct = (item.value / maxValue) * 100
          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--t-small)',
                  color: 'var(--text)',
                  opacity: animate ? 1 : 0,
                  transition: `opacity 400ms ease ${80 * i}ms`,
                }}
              >
                {item.value}{unit}
              </span>
              <div
                style={{
                  width: '100%',
                  maxWidth: 48,
                  background: 'var(--text-faint)',
                  borderRadius: '4px 4px 0 0',
                  overflow: 'hidden',
                  height: '80%',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: animate ? `${heightPct}%` : '0%',
                    background: item.color || 'var(--accent)',
                    borderRadius: '4px 4px 0 0',
                    transition: `height 1.1s cubic-bezier(0.34,1.56,0.64,1) ${80 * i}ms`,
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--t-label)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  maxWidth: 72,
                  wordBreak: 'break-word',
                }}
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
      {showGroupLabels && (
        <div style={{ display: 'flex', gap: 12, marginTop: 8, padding: '0 8px' }}>
          {showGroupLabels.map((group, gi) => (
            <div
              key={gi}
              style={{
                flex: group.span,
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--t-label)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent-2)',
                borderTop: '2px solid var(--accent-2-dim)',
                paddingTop: 6,
                opacity: animate ? 1 : 0,
                transition: `opacity 600ms ease ${400 + gi * 200}ms`,
              }}
            >
              {group.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
