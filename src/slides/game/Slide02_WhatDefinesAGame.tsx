'use client'

import CircleMaskVideo from '@/components/CircleMaskVideo'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Slide02_WhatDefinesAGame() {
  const { ref, isVisible } = useScrollReveal()

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
      <div style={{ width: '48%', padding: '5% 4%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--t-display)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            transition: 'clip-path 700ms ease',
          }}
        >
          What Defines a Game?
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-body)',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            marginTop: 20,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms ease 200ms, transform 600ms ease 200ms',
          }}
        >
          A game is more than entertainment — it is a structured system of rules, choices, and feedback
          loops that creates meaningful interaction. From ancient board games to photorealistic virtual
          worlds, the core remains: agency, challenge, and reward within a designed experience.
        </p>
      </div>
      <CircleMaskVideo src="/images-videos/Slide-2.mp4" />
    </div>
  )
}
