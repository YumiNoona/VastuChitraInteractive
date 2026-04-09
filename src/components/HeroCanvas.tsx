'use client'

import { useRef, useEffect, useState } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    import('@/lib/three-scene').then(({ initThreeScene }) => {
      if (canvasRef.current) {
        cleanupRef.current = initThreeScene(canvasRef.current)
        setLoading(false)
      }
    })

    return () => {
      cleanupRef.current?.()
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            animation: 'pulse 1.2s ease-in-out infinite',
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
