import { notFound } from 'next/navigation'
import Link from 'next/link'
import SlideViewer from '@/components/SlideViewer'
import ThemeToggle from '@/components/ThemeToggle'
import { gameMetadata } from '@/slides/game'
import { projectionMetadata } from '@/slides/projection'

export const dynamicParams = false

export function generateStaticParams() {
  return [
    { slug: 'game' },
    { slug: 'projection-mapping' },
  ]
}

export default async function ConceptViewerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  if (slug === 'game') {
    return (
      <ViewerLayout title="The Game Concept">
        <SlideViewer type="game" slides={gameMetadata} />
      </ViewerLayout>
    )
  }

  if (slug === 'projection-mapping') {
    return (
      <ViewerLayout title="Projection Mapping">
        <SlideViewer type="projection" slides={projectionMetadata} />
      </ViewerLayout>
    )
  }

  notFound()
}

function ViewerLayout({ title, children }: { title: string, children: React.ReactNode }) {
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
        {children}
      </div>
    </main>
  )
}
