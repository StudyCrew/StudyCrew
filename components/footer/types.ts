import type React from 'react'

export enum FooterLink {
  Mission = 'mission',
  Features = 'features',
  Project = 'project',
  Team = 'team',
  SignUp = 'signup',
  FAQ = 'faq'
}

export interface FooterProps {
  className?: string
  activePage: FooterLink
  setActivePage: React.Dispatch<React.SetStateAction<FooterLink>>
  missionRef: React.MutableRefObject<null>
  featuresRef: React.MutableRefObject<null>
  projectRef: React.MutableRefObject<null>
  teamRef: React.MutableRefObject<null>
  signupRef: React.MutableRefObject<null>
  faqRef: React.MutableRefObject<null>
}
