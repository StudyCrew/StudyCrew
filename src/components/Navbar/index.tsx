import React from 'react'
import { scrollToRef } from '@/hooks'

import { type NavbarProps } from './types'
import './style.css'

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): JSX.Element => {
  const {
    activePage,
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef,
    setIsMenuOpen
  } = props

  const isActive = (name: string): string =>
    activePage === name ? 'activeNavLink' : ''

  const handleNavLinkClick = (name: string): void => {
    setIsMenuOpen(false)

    let ref
    switch (name) {
      case 'mission':
        ref = missionRef
        break
      case 'features':
        ref = featuresRef
        break
      case 'project':
        ref = projectRef
        break
      case 'team':
        ref = teamRef
        break
      case 'signup':
        ref = signupRef
        break
      case 'faq':
        ref = faqRef
        break
      default:
        return
    }

    scrollToRef(ref)
  }

  return (
    <nav className=''>
      <div
        className={`${isActive('mission')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('mission')
          setActivePage('mission')
        }}
      >
        Mission
      </div>
      <div
        className={`${isActive('features')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('features')
          setActivePage('features')
        }}
      >
        Features
      </div>
      <div
        className={`${isActive('project')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('project')
          setActivePage('project')
        }}
      >
        Project
      </div>
      <div
        className={`${isActive('signup')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('signup')
          setActivePage('signup')
        }}
      >
        Sign Up
      </div>
      <div
        className={`${isActive('team')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('team')
          setActivePage('team')
        }}
      >
        Team
      </div>
      <div
        className={`${isActive('faq')} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('faq')
          setActivePage('faq')
        }}
      >
        FAQs
      </div>
    </nav>
  )
}

export default Navbar
