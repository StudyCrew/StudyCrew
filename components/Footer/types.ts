import type React from 'react'

export interface FooterProps {
  activePage: string
  setActivePage: React.Dispatch<React.SetStateAction<string>>
  missionRef: React.MutableRefObject<null>
  featuresRef: React.MutableRefObject<null>
  projectRef: React.MutableRefObject<null>
  teamRef: React.MutableRefObject<null>
  signupRef: React.MutableRefObject<null>
  faqRef: React.MutableRefObject<null>
}
