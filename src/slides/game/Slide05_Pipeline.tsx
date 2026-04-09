'use client'

import CircleMaskImage from '@/components/CircleMaskImage'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

const steps = [
  { emoji: '💡', title: 'Idea / Concept', desc: 'Core idea, genre, target audience, and unique selling point.' },
  { emoji: '📝', title: 'Pre-Production', desc: 'Game design document, prototyping, art direction, tech stack.' },
  { emoji: '🔨', title: 'Production', desc: 'Full asset creation, programming, level design, and integration.' },
  { emoji: '🧪', title: 'Testing (QA)', desc: 'Bug fixing, performance optimization, playtesting, and balancing.' },
  { emoji: '🚀', title: 'Launch & Live Ops', desc: 'Release, marketing, community management, updates, and DLC.' },
]

export default function Slide05_Pipeline() {
  const { ref, visibleCount } = useStaggerReveal(5, 200)

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
      <CircleMaskImage src="/images/slides/slide05.jpg" alt="Dark warrior" side="left" />
      <div style={{ width: '55%', marginLeft: '45%', padding: '3% 4%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em' }}>
          Game Dev Pipeline
        </h2>
        <div style={{ position: 'relative', marginTop: 16, paddingLeft: 20 }}>
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: 4,
              top: 0,
              width: 2,
              height: visibleCount > 0 ? '100%' : '0%',
              background: 'var(--accent-dim)',
              transition: 'height 800ms ease',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  opacity: i < visibleCount ? 1 : 0,
                  transform: i < visibleCount ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 400ms ease, transform 400ms ease, border-color 200ms',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <span style={{ fontSize: 20, flexShrink: 0 }}>{step.emoji}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent)' }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 2 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
