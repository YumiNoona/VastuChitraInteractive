'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const panels = [
  { label: '2D Scene', gradient: 'linear-gradient(180deg, #4A5568 0%, #2D3748 100%)', desc: 'Flat, sprite-based rendering with parallax depth layers.' },
  { label: '2.5D Scene', gradient: 'linear-gradient(180deg, #2D5016 0%, #1A3A0A 100%)', desc: '3D geometry rendered from a fixed 2D perspective.' },
  { label: '3D Scene', gradient: 'linear-gradient(180deg, #4A2008 0%, #8B4513 40%, #1A0A02 100%)', desc: 'Full spatial freedom with camera control and depth.' },
]

export default function Slide09_SeeItInAction() {
  const { ref, visibleCount } = useStaggerReveal(3, 150)

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
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center' }}>
        See It In Action
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', textAlign: 'center', marginTop: 8, marginBottom: 24 }}>
        How the same world can look across different rendering dimensions.
      </p>

      <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', borderRadius: 12, overflow: 'hidden', opacity: visibleCount > 0 ? 1 : 0, transform: visibleCount > 0 ? 'scale(1)' : 'scale(1.02)', transition: 'all 800ms ease' }}>
        <img src="/images-videos/Slide-9.png" alt="Featured gameplay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)' }} />
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 600, color: '#fff' }}>Final Composited Scene</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Rendering artifacts, lighting, and post-processing combined.</div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', background: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: 4, border: '1px solid var(--accent)' }}>
            Difference In Art Style
          </div>
        </div>
      </div>
    </div>
  )
}
