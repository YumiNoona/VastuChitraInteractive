import React from 'react'
import type { SlideEntry } from '@/components/SlideViewer'

export const projectionSlides: SlideEntry[] = [
  { id: 1, title: 'Projection Mapping Concepts', component: React.lazy(() => import('./Slide01_Placeholder')) },
]
