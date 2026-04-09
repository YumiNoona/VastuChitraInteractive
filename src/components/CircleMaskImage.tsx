'use client'

import Image from 'next/image'

interface CircleMaskImageProps {
  src: string
  alt: string
  priority?: boolean
  side?: 'right' | 'left'
}

export default function CircleMaskImage({
  src,
  alt,
  priority = false,
  side = 'right',
}: CircleMaskImageProps) {
  const clipPath =
    side === 'right'
      ? 'ellipse(100% 50% at 100% 50%)'
      : 'ellipse(100% 50% at 0% 50%)'

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        [side]: 0,
        width: '52%',
        height: '100%',
        clipPath,
        WebkitClipPath: clipPath,
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="52vw"
        style={{ objectFit: 'cover' }}
        priority={priority}
      />
    </div>
  )
}
