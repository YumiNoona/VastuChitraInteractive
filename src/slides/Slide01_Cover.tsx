'use client'

import { useEffect, useRef } from 'react'

export default function Slide01_Cover() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function animate() {
      const { gsap } = await import('gsap')
      const words = titleRef.current?.querySelectorAll('.word')
      if (words) {
        gsap.fromTo(
          words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }
        )
      }
    }
    animate()
  }, [])

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          animation: 'dotPulse 6s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div ref={titleRef} style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
        {'Vastu Chitra Interactive'.split(' ').map((word, i) => (
          <span
            key={i}
            className="word"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--t-hero)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: 'var(--text)',
              marginRight: '0.25em',
              opacity: 0,
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <p
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--t-h3)',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginTop: 24,
          textAlign: 'center',
          animation: 'fadeIn 700ms ease 600ms both',
        }}
      >
        Game Design · Projection Mapping · Interactive Worlds
      </p>
      <p
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--t-label)',
          fontWeight: 600,
          letterSpacing: '0.11em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
          marginTop: 32,
          animation: 'fadeIn 700ms ease 900ms both',
        }}
      >
        Vastu Chitra Interactive · 2025
      </p>
      <style jsx>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.07; }
        }
      `}</style>
    </div>
  )
}
