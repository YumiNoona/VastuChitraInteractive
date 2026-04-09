'use client'

import { useStaggerReveal } from '@/hooks/useScrollReveal'

const roles = [
  { name: 'Game Designer', desc: 'Defines mechanics, rules, and the player experience loop.' },
  { name: 'Programmer', desc: 'Implements game systems, physics, AI, and networking.' },
  { name: 'Artist', desc: 'Creates visual assets — characters, environments, UI, and animations.' },
  { name: 'Sound Designer', desc: 'Crafts audio landscapes, SFX, and adaptive music systems.' },
  { name: 'QA Tester', desc: 'Finds bugs, validates builds, ensures quality across platforms.' },
]

export default function Slide04_TeamStructure() {
  const { ref, visibleCount } = useStaggerReveal(5, 100)

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '45%', padding: '4% 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/images-videos/Slide-4.jpg" alt="Team accent" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', letterSpacing: '-0.025em' }}>
            Team Structure
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', marginTop: 12, lineHeight: 1.7 }}>
            Every great game is built by a multidisciplinary team. Here are the five core roles that
            drive a game from concept to launch.
          </p>
        </div>
      </div>
      <div
        style={{
          width: '55%',
          padding: '3% 4% 3% 2%',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        {roles.map((role, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg-card)',
              borderLeft: '3px solid var(--accent-2)',
              borderRadius: '0 8px 8px 0',
              padding: '14px 18px',
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 400ms ease, transform 400ms ease',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 500, color: 'var(--text)' }}>
              {role.name}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.6 }}>
              {role.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
