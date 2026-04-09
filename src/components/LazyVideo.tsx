'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
  poster?: string
}

export default function LazyVideo({ src, className, style, poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!videoRef.current) return

    if (isIntersecting) {
      videoRef.current.play().catch((err) => {
        // Autoplay might be blocked if not muted or user hasn't interacted, 
        // but we have muted=true so it should be fine.
        console.warn('Video play failed:', err)
      })
    } else {
      videoRef.current.pause()
    }
  }, [isIntersecting])

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    />
  )
}
