'use client'

import { useState, useEffect, useRef } from 'react'

interface WordCyclerProps {
  words: string[]
  interval?: number
}

export default function WordCycler({ words, interval = 2200 }: WordCyclerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, interval)

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [words.length, interval])

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        height: '1.2em',
        lineHeight: '1.2em',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          transition: 'transform 300ms ease, opacity 300ms ease',
          transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
          opacity: isAnimating ? 0 : 1,
        }}
      >
        {words[currentIndex]}
      </span>
    </div>
  )
}
