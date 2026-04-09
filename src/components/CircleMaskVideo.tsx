'use client'

interface CircleMaskVideoProps {
  src: string
  side?: 'right' | 'left'
}

export default function CircleMaskVideo({
  src,
  side = 'right',
}: CircleMaskVideoProps) {
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
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}
