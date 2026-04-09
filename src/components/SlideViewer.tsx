'use client'

import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { gameComponents } from '@/slides/game'
import { projectionComponents } from '@/slides/projection'

export interface SlideMetadata {
  id: number
  title: string
}

interface SlideViewerProps {
  type: 'game' | 'projection'
  slides: SlideMetadata[]
}

const registry = {
  game: gameComponents,
  projection: projectionComponents,
}

export default function SlideViewer({ type, slides }: SlideViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const thumbStripRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)

  const total = slides.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
      setIsPlaying(false)
    }
  }, [])

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev') => {
      if (index < 0 || index >= total) return
      setDirection(dir)
      setActiveIndex(index)
    },
    [total]
  )

  const next = useCallback(() => {
    goTo((activeIndex + 1) % total, 'next')
  }, [activeIndex, total, goTo])

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + total) % total, 'prev')
  }, [activeIndex, total, goTo])

  // Keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === ' ') {
        e.preventDefault()
        setIsPlaying((p) => !p)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Autoplay
  useEffect(() => {
    if (isPlaying && !isHovered && !reducedMotion) {
      intervalRef.current = setInterval(next, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, isHovered, reducedMotion, next])

  // Scroll thumbnail into view
  useEffect(() => {
    if (!thumbStripRef.current) return
    const container = thumbStripRef.current
    const thumb = container.children[activeIndex] as HTMLElement
    if (thumb) {
      const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2
      const containerCenter = container.offsetWidth / 2
      container.scrollTo({
        left: thumbCenter - containerCenter,
        behavior: 'smooth',
      })
    }
  }, [activeIndex])

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 52) {
      if (delta > 0) next()
      else prev()
    }
  }

  const ActiveSlide = registry[type]?.[activeIndex] || null

  const transitionDuration = reducedMotion ? '0ms' : '380ms'

  return (
    <div
      role="region"
      aria-label={`${type} presentation`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Stage */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 12,
          aspectRatio: '16/9',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  border: '2px solid var(--border)',
                  borderTopColor: 'var(--accent)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
            </div>
          }
        >
          <div
            key={activeIndex}
            style={{
              width: '100%',
              height: '100%',
              animation: reducedMotion
                ? 'none'
                : `slideIn${direction === 'next' ? 'Left' : 'Right'} ${transitionDuration} cubic-bezier(0.4,0,0.2,1)`,
            }}
          >
            {ActiveSlide && <ActiveSlide />}
          </div>
        </Suspense>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 200ms, color 200ms',
            zIndex: 5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg-card)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 200ms, color 200ms',
            zIndex: 5,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--bg-card)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div
        ref={thumbStripRef}
        style={{
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '12px 0 4px',
          scrollbarWidth: 'none',
        }}
      >
        {slides.map((slide, i) => {
          const isActive = i === activeIndex
          const hue = (i * 23) % 360
          return (
            <button
              key={slide.id}
              onClick={() => goTo(i, i > activeIndex ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              style={{
                width: 144,
                height: 81,
                borderRadius: 6,
                scrollSnapAlign: 'start',
                flexShrink: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                border: isActive
                  ? '2px solid var(--accent)'
                  : '2px solid transparent',
                opacity: isActive ? 1 : 0.45,
                transform: isActive ? 'scale(1.04)' : 'scale(1)',
                transition: 'all 200ms ease',
                background: `hsl(${hue}, 40%, 25%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--t-label)',
                fontWeight: 600,
                letterSpacing: '0.11em',
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.opacity = '0.8'
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.opacity = '0.45'
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          )
        })}
      </div>

      {/* Controls Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0',
          gap: 16,
        }}
      >
        {/* Left: Slide Counter */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-label)',
            fontWeight: 600,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            minWidth: 64,
          }}
        >
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        {/* Center: Slide Title */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--t-small)',
            color: 'var(--text)',
            flex: 1,
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          aria-live="polite"
        >
          {slides[activeIndex].title}
        </span>

        {/* Right: Autoplay toggle */}
        <button
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1px solid var(--border-strong)',
            background: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 200ms',
          }}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-muted)" stroke="none">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-muted)" stroke="none">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      </div>

      {/* Inline keyframe styles */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </div>
  )
}
