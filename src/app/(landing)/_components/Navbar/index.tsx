import React from 'react'
import { scrollToRef } from '@/hooks'
import Link from 'next/link'

import { type NavbarProps } from './types'

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
    activePage === name
      ? 'text-primary-500 mb-0 border-solid border-b-[5px] border-primary-500'
      : 'border-none mb-[5px]'

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

  const divClass = `w-full text-center p-[20px] color-primary-950 text-[16px] font-semibold 
    transition-colors transition-mb duration-200 ease-in-out transition-border duration-200 ease-in-out hover:text-primary-500
    md:pt-[15px] md:px-[20px] md:pb-[10px] md:text-center md:w-auto md:rounded-[5px]`

  return (
    <nav
      className="
        flex flex-col justify-center items-center w-screen h-screen fixed z-5000 bg-white/90 top-0 left-0 pt-[10px]
        md:inline-grid md:grid-cols-6 md:bg-white/78 md:w-fit md:relative md:col-span-1 md:w-fit md:h-fit md:top-[-10px] md:rounded-b-[5px] md:backdrop-blur-md md:shadow-[0_0_10px_0_#ddd]
      "
    >
      <div
        className={`${isActive('mission')} ${divClass} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('mission')
          setActivePage('mission')
        }}
      >
        Mission
      </div>
      <div
        className={`${isActive('features')} ${divClass} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('features')
          setActivePage('features')
        }}
      >
        Features
      </div>
      <div
        className={`${isActive('project')} ${divClass} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('project')
          setActivePage('project')
        }}
      >
        Project
      </div>
      <Link
        className={`${isActive('signup')} ${divClass} hover:cursor-pointer no-underline text-current visited:text-current`}
        href="/signup"
      >
        Sign Up
      </Link>
      <div
        className={`${isActive('team')} ${divClass} hover:cursor-pointer`}
        onClick={() => {
          handleNavLinkClick('team')
          setActivePage('team')
        }}
      >
        Team
      </div>
      <div
        className={`${isActive('faq')} ${divClass} hover:cursor-pointer`}
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
