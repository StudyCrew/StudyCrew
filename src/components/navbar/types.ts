import type React from 'react'

export enum NavbarLink {
  Mission = 'Mission',
  Features = 'Features',
  Project = 'Project',
  Team = 'Team',
  Signup = 'Signup',
  FAQ = 'FAQ'
}

export interface NavbarProps {
  className?: string
  activePage: NavbarLink
  setActivePage: React.Dispatch<React.SetStateAction<NavbarLink>>
  missionRef: React.MutableRefObject<null>
  featuresRef: React.MutableRefObject<null>
  projectRef: React.MutableRefObject<null>
  teamRef: React.MutableRefObject<null>
  signupRef: React.MutableRefObject<null>
  faqRef: React.MutableRefObject<null>
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
