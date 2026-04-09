'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const designerData = {
  tasks: ['Define game mechanics and rules', 'Create GDD (Game Design Document)', 'Balance gameplay systems', 'Design levels and progression'],
  tools: 'Figma, Miro, Excel, Unity Editor',
  focus: 'Player experience and fun factor',
}

const developerData = {
  tasks: ['Implement game systems in code', 'Build physics and AI systems', 'Optimize performance', 'Integrate assets and audio'],
  tools: 'Unity, Unreal, VS Code, Git',
  focus: 'Technical execution and stability',
}

export default function Slide06_DesignerVsDeveloper() {
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
        overflow: 'hidden',
        padding: '4%',
      }}
    >
      <video
        src="/images-videos/Slide-6.mp4"
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
          opacity: 0.25,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>
        {/* Designer Column */}
        <div
          style={{
            width: '48%',
            padding: '0 3% 0 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--accent)', marginBottom: 16 }}>
            Game Designer
          </h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>What they do</div>
          <ul style={{ marginBottom: 16 }}>
            {designerData.tasks.map((t, i) => (
              <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: 12, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>·</span>{t}
              </li>
            ))}
          </ul>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Tools</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', marginBottom: 12 }}>{designerData.tools}</p>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Focus</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--accent-2)' }}>{designerData.focus}</p>
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: 'var(--accent)', opacity: 0.3, alignSelf: 'stretch' }} />

        {/* Developer Column */}
        <div
          style={{
            width: '48%',
            padding: '0 0 0 3%',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 500, color: 'var(--accent-3)', marginBottom: 16 }}>
            Game Developer
          </h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>What they do</div>
          <ul style={{ marginBottom: 16 }}>
            {developerData.tasks.map((t, i) => (
              <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: 12, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-3)' }}>·</span>{t}
              </li>
            ))}
          </ul>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Tools</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', marginBottom: 12 }}>{developerData.tools}</p>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>Focus</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--accent-2)' }}>{developerData.focus}</p>
        </div>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--t-body)',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: 16,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 600ms ease 400ms',
        }}
      >
        &ldquo;The simplest way to remember it: designers define <em>what</em> happens, developers define <em>how</em> it happens.&rdquo;
      </p>
    </div>
  )
}
