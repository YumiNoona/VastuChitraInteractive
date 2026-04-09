'use client'

import { useState, useEffect, useRef } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useAnimatedCounter(
  target: number,
  duration = 1800,
  enabled = false
) {
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!enabled || hasAnimated.current) return
    hasAnimated.current = true

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setDisplayValue(eased * target)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplayValue(target)
      }
    }

    requestAnimationFrame(tick)
  }, [target, duration, enabled])

  return displayValue
}
