'use client'

export default function Slide01_Placeholder() {
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
        backgroundImage: 'radial-gradient(circle, var(--accent-3) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.8,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, rgba(29, 158, 117, 0.1) 0%, transparent 100%)' }} />
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', zIndex: 1 }}>
        Projection Mapping
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', marginTop: 16, zIndex: 1 }}>
        Presentation Deck in Development
      </p>
    </div>
  )
}
