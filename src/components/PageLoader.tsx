'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400) // 1.4s animation time

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div 
      className={loading ? '' : 'exit'}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 400ms ease',
        opacity: 1,
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 80px)',
          fontWeight: 700,
          color: 'var(--accent)',
          animation: 'vcIn 600ms ease-out both',
        }}
      >
        VC
      </div>
      <style jsx>{`
        .exit {
          opacity: 0 !important;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
