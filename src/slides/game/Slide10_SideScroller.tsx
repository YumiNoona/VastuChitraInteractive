import { useScrollReveal } from '@/hooks/useScrollReveal'
import LazyVideo from '@/components/LazyVideo'

export default function Slide10_SideScroller() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        padding: '3% 4%',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 2 }}>
        2D vs 2.5D Side-Scrollers
      </h2>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
        Dimension Comparison
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {/* 2D */}
        <div
          style={{
            flex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          <span style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', padding: '4px 14px', borderRadius: 20, marginBottom: 12 }}>2D</span>
          <div style={{ aspectRatio: '16/9', borderRadius: 8, background: 'var(--bg-card)', marginBottom: 14, overflow: 'hidden', transform: isVisible ? 'scale(1)' : 'scale(1.06)', transition: 'transform 800ms ease', position: 'relative' }}>
            <LazyVideo src="/images-videos/Slide-10-Hollow-Knight.mp4" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--text)' }}>Hollow Knight</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 4 }}>
            Hand-drawn art, atmospheric exploration, and tight combat in a vast interconnected world.
            Pure 2D rendering with parallax scrolling layers for visual depth.
          </p>
        </div>

        {/* 2.5D */}
        <div
          style={{
            flex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          <span style={{ display: 'inline-block', background: 'var(--accent-2)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', padding: '4px 14px', borderRadius: 20, marginBottom: 12 }}>2.5D</span>
          <div style={{ aspectRatio: '16/9', borderRadius: 8, background: 'var(--bg-card)', marginBottom: 14, overflow: 'hidden', transform: isVisible ? 'scale(1)' : 'scale(1.06)', transition: 'transform 800ms ease', position: 'relative' }}>
            <LazyVideo src="/images-videos/Slide-10-The-Last-Crown.mp4" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--text)' }}>Prince of Persia: The Lost Crown</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 4 }}>
            3D characters and environments rendered from a side-scrolling perspective. Full depth
            and lighting with the precision of 2D gameplay mechanics.
          </p>
        </div>
      </div>
    </div>
  )
}
