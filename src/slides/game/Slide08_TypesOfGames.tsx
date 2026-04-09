import Image from 'next/image'
import { useStaggerReveal } from '@/hooks/useScrollReveal'
import LazyVideo from '@/components/LazyVideo'

const genres = [
  { name: 'Action', media: '/images-videos/Slide-8-Action.mp4', type: 'video' },
  { name: 'RPG', media: '/images-videos/Slide-8-RPG.mp4', type: 'video' },
  { name: 'Strategy', media: '/images-videos/Slide-8-Statergy.jpeg', type: 'image' },
  { name: 'Puzzle', media: '/images-videos/Slide-8-Puzzle.jpg', type: 'image' },
]

const styles = [
  { name: '2D', media: '/images-videos/Slide-8-2D.mp4', type: 'video' },
  { name: '3D', media: '/images-videos/Slide-8-3D.mp4', type: 'video' },
  { name: '2.5D', media: '/images-videos/Slide-8-2.5D.mp4', type: 'video' },
]

export default function Slide08_TypesOfGames() {
  const { ref, visibleCount } = useStaggerReveal(7, 80)

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg)',
        padding: '3% 4%',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-display)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 4 }}>
        Types of Games
      </h2>

      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10, marginTop: 12 }}>
        By Genre
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {genres.map((g, i) => (
          <div key={i} style={{ opacity: i < visibleCount ? 1 : 0, transform: i < visibleCount ? 'scale(1)' : 'scale(0.92)', transition: 'all 500ms ease' }}>
            <div style={{ aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden', background: 'var(--bg-card)', position: 'relative' }}>
              {g.type === 'video' ? (
                <LazyVideo src={g.media} />
              ) : (
                <Image src={g.media} alt={g.name} fill style={{ objectFit: 'cover' }} />
              )}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', textAlign: 'center', marginTop: 6 }}>{g.name}</div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-label)', fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--accent-2)', marginBottom: 10, marginTop: 16 }}>
        By Visual Style
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {styles.map((s, i) => {
          const idx = i + 4
          return (
            <div key={i} style={{ opacity: idx < visibleCount ? 1 : 0, transform: idx < visibleCount ? 'scale(1)' : 'scale(0.92)', transition: 'all 500ms ease' }}>
              <div style={{ aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden', background: 'var(--bg-card)', position: 'relative' }}>
                <LazyVideo src={s.media} />
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--t-small)', color: 'var(--text)', textAlign: 'center', marginTop: 6 }}>{s.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
