import { notFound } from 'next/navigation'
import Link from 'next/link'
import SlideViewer, { SlideEntry } from '@/components/SlideViewer'
import ThemeToggle from '@/components/ThemeToggle'
import { gameSlides } from '@/slides/game/index'
import { projectionSlides } from '@/slides/projection/index'

export const dynamicParams = false

export function generateStaticParams() {
  return [
    { slug: 'game' },
    { slug: 'projection-mapping' },
  ]
}

export default async function ConceptViewerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  let slides: SlideEntry[] | null = null
  let title = ''
  
  if (slug === 'game') {
    slides = gameSlides
    title = 'The Game Concept'
  } else if (slug === 'projection-mapping') {
    slides = projectionSlides
    title = 'Projection Mapping'
  }

  if (!slides) {
    notFound()
  }

  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <header style={{ 
        padding: '16px 2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link 
            href="/concept" 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border)',
              transition: 'background 200ms',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--t-h3)', fontWeight: 600, color: 'var(--text)' }}>
            {title}
          </span>
        </div>
        
        <ThemeToggle />
      </header>

      {/* Viewer Container */}
      <div style={{ flex: 1, padding: '16px 2vw', display: 'flex', flexDirection: 'column', width: '100%', margin: '0 auto', maxWidth: 1920 }}>
        <SlideViewer slides={slides} />
      </div>
    </main>
  )
}
