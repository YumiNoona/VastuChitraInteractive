'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const concepts = [
  {
    id: 'game',
    title: 'The Game',
    desc: 'An interactive journey through game design, Indian heritage, and projection mapping mechanics.',
    gradient: 'linear-gradient(135deg, #0A1F14 0%, #06120C 100%)',
    accent: 'var(--accent)',
  },
  {
    id: 'projection-mapping',
    title: 'Projection Mapping',
    desc: 'Transforming built environments into living, breathing narratives using real-time rendering.',
    gradient: 'linear-gradient(135deg, #1A0D0A 0%, #0D0605 100%)',
    accent: 'var(--accent-2)',
  },
]

export default function ConceptHub() {
  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      
      <div style={{ paddingTop: 160, paddingBottom: 100, paddingLeft: '6vw', paddingRight: '6vw', maxWidth: 1400, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 24 }}>
          Concept Hub
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-body)', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 640, marginBottom: 80 }}>
          Explore our internal pitch presentations and design frameworks. Select a concept below to load the interactive viewer module.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {concepts.map((concept, i) => (
            <Link 
              key={concept.id} 
              href={`/concept/${concept.id}`}
              style={{ display: 'block' }}
            >
              <div
                className="concept-card"
                style={{
                  position: 'relative',
                  background: concept.gradient,
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '40px 32px',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  overflow: 'hidden',
                  animation: `fadeUp 600ms ease-out ${i * 150}ms both`,
                }}
              >
                <div 
                  className="concept-bg-glow"
                  style={{
                    position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                    background: `radial-gradient(circle at 50% 50%, ${concept.accent} 0%, transparent 40%)`,
                    opacity: 0,
                    transition: 'opacity 500ms ease',
                    pointerEvents: 'none',
                    zIndex: 0,
                    mixBlendMode: 'screen',
                  }}
                />
                
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ 
                    fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', 
                    textTransform: 'uppercase', color: concept.accent, marginBottom: 16 
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h2)', fontWeight: 600, color: 'var(--text)', marginBottom: 16 }}>
                    {concept.title}
                  </h3>
                  
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 40, flex: 1 }}>
                    {concept.desc}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Open Module
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon" style={{ transition: 'transform 300ms ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .concept-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--border-strong);
        }
        .concept-card:hover .concept-bg-glow {
          opacity: 0.12 !important;
        }
        .concept-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </main>
  )
}
