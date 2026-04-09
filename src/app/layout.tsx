import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import PageLoader from '@/components/PageLoader'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Vastu Chitra Interactive',
  description: 'Where Space Becomes Story. Spatial storytelling and projection mapping studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-display: ${spaceGrotesk.style.fontFamily}, system-ui, sans-serif !important;
            --font-body: ${dmSans.style.fontFamily}, system-ui, sans-serif !important;
          }
        `}} />
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}
