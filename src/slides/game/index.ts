import React from 'react'
import type { SlideEntry } from '@/components/SlideViewer'

export const gameSlides: SlideEntry[] = [
  { id: 1, title: 'Vastu Chitra Interactive', component: React.lazy(() => import('./Slide01_Cover')) },
  { id: 2, title: 'What Defines a Game?', component: React.lazy(() => import('./Slide02_WhatDefinesAGame')) },
  { id: 3, title: 'Video Game Industry', component: React.lazy(() => import('./Slide03_VideoGameIndustry')) },
  { id: 4, title: 'Team Structure', component: React.lazy(() => import('./Slide04_TeamStructure')) },
  { id: 5, title: 'Game Dev Pipeline', component: React.lazy(() => import('./Slide05_Pipeline')) },
  { id: 6, title: 'Designer vs Developer', component: React.lazy(() => import('./Slide06_DesignerVsDeveloper')) },
  { id: 7, title: 'Behind the Scenes', component: React.lazy(() => import('./Slide07_BehindScenes')) },
  { id: 8, title: 'Types of Games', component: React.lazy(() => import('./Slide08_TypesOfGames')) },
  { id: 9, title: 'See It In Action', component: React.lazy(() => import('./Slide09_SeeItInAction')) },
  { id: 10, title: '2D vs 2.5D Side-Scrollers', component: React.lazy(() => import('./Slide10_SideScroller')) },
  { id: 11, title: 'Small Teams, Big Impact', component: React.lazy(() => import('./Slide11_SmallTeams')) },
  { id: 12, title: 'Production Scale', component: React.lazy(() => import('./Slide12_SuccessfulStories')) },
  { id: 13, title: 'Architecture in Games', component: React.lazy(() => import('./Slide13_Architecture')) },
  { id: 14, title: 'AC Unity & Notre-Dame', component: React.lazy(() => import('./Slide14_ACUnity')) },
  { id: 15, title: 'Indian Games Leading the Way', component: React.lazy(() => import('./Slide15_IndianGames')) },
  { id: 16, title: 'Studios to Watch', component: React.lazy(() => import('./Slide16_OngoingStudio')) },
  { id: 17, title: 'Case Study: Uncharted', component: React.lazy(() => import('./Slide17_Uncharted')) },
  { id: 18, title: 'Events & Government Support', component: React.lazy(() => import('./Slide18_Events')) },
  { id: 20, title: 'Publishing Platforms', component: React.lazy(() => import('./Slide20_Platforms')) },
  { id: 21, title: 'Where Indian Studios Publish', component: React.lazy(() => import('./Slide21_IndianPublishing')) },
  { id: 22, title: 'Global Gaming Industry', component: React.lazy(() => import('./Slide22_GlobalIndustry')) },
  { id: 23, title: 'Indian Gaming Market', component: React.lazy(() => import('./Slide23_IndianMarket')) },
  { id: 24, title: 'Ethical Gaming Rules', component: React.lazy(() => import('./Slide24_EthicalGaming')) },
]
