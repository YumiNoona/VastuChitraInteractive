'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Studio() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="studio" className="section-container" style={{ padding: '80px 6vw', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 48 }}>
        The Studio
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 80 }}>
        <AnimatedCounter value={12} suffix="+" label="Projects Mapped" />
        <AnimatedCounter value={4} suffix="+" label="Years of Practice" />
        <AnimatedCounter value={3} suffix="" label="Active Platforms" />
      </div>

      <div 
        ref={ref}
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 60,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 800ms ease',
        }}
      >
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Our studio brings together architects, technologists, and storytellers. 
            We believe the most powerful experiences happen at the intersection of space and story.
          </p>

          <div style={{ marginTop: 48, borderLeft: '3px solid var(--accent)', paddingLeft: 20 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              "We don't just build for screens. We build for rooms."
            </p>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 280, height: 200, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: 0, width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', zIndex: 2 }} />
            
            {[-40, -20, 0, 20, 40].map((angle, i) => (
              <div 
                key={i}
                style={{
                  position: 'absolute',
                  top: 4,
                  width: 1,
                  height: isVisible ? 160 : 0,
                  background: 'var(--accent)',
                  transformOrigin: 'top center',
                  transform: `rotate(${angle}deg)`,
                  opacity: 0.3,
                  animation: `rayPulse 4s ease-in-out ${i * 0.4}s infinite alternate`,
                  transition: `height 800ms ease ${300 + i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes rayPulse {
          0% { opacity: 0.2; transform: scaleY(0.9) rotate(var(--angle, 0deg)); }
          100% { opacity: 0.8; transform: scaleY(1.1) rotate(var(--angle, 0deg)); }
        }
      `}</style>
    </section>
  )
}
