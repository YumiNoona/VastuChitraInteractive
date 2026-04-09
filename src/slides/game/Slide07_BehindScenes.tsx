'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Slide07_BehindScenes() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        padding: '4%',
        overflow: 'hidden',
      }}
    >
      <video
        src="/images-videos/Slide-7.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <h2 style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 24 }}>
        Behind the Scenes
      </h2>
      <div style={{ display: 'flex', gap: 20, flex: 1 }}>
        {/* Gaussian Splatting Card */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-card)',
            borderRadius: 10,
            padding: '24px 20px',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, background: 'repeating-linear-gradient(0deg, var(--accent-2), var(--accent-2) 1px, transparent 1px, transparent 6px)', animation: 'scanlines 8s linear infinite', pointerEvents: 'none' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', marginBottom: 12, position: 'relative', zIndex: 1 }}>
            Gaussian Splatting
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
            A revolutionary 3D reconstruction technique that represents scenes as collections of 3D Gaussians.
            It enables real-time, photorealistic rendering of scanned environments — ideal for game asset creation
            and virtual production pipelines.
          </p>
        </div>

        {/* Motion Capture Card */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-card)',
            borderRadius: 10,
            padding: '24px 20px',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 600ms ease 100ms, transform 600ms ease 100ms',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {[0, 1, 2, 3].map((d) => (
              <div
                key={d}
                style={{
                  position: 'absolute',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--accent-3)',
                  opacity: 0.15,
                  animation: `mocapDot${d} ${3 + d * 0.5}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--accent-2)', marginBottom: 12, position: 'relative', zIndex: 1 }}>
            Motion Capture
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
            Recording human movement and translating it into digital character animation. Modern mocap
            systems capture facial expressions, body dynamics, and hand gestures with sub-millimeter
            accuracy, bringing game characters to life.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes mocapDot0 { 0%,100% { top: 20%; left: 30%; } 50% { top: 60%; left: 50%; } }
        @keyframes mocapDot1 { 0%,100% { top: 70%; left: 20%; } 50% { top: 30%; left: 70%; } }
        @keyframes mocapDot2 { 0%,100% { top: 40%; left: 60%; } 50% { top: 80%; left: 30%; } }
        @keyframes mocapDot3 { 0%,100% { top: 50%; left: 80%; } 50% { top: 20%; left: 40%; } }
      `}</style>
    </div>
  )
}
