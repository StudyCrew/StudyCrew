import type React from 'react'

import { type Page } from '@/types'

export type PageRefMapping = Record<Page, React.MutableRefObject<null>>

export interface FooterProps {
  activePage: Page
  className?: string
  faqRef: React.MutableRefObject<null>
  teamRef: React.MutableRefObject<null>
  signupRef: React.MutableRefObject<null>
  missionRef: React.MutableRefObject<null>
  projectRef: React.MutableRefObject<null>
  featuresRef: React.MutableRefObject<null>
  setActivePage: React.Dispatch<React.SetStateAction<Page>>
}
