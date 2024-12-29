'use client'

import React from 'react'
import Image from 'next/image'
import { useSection } from '../SectionContext'
import Logo from 'public/assets/LogoIcon.svg'

type NavbarProps = {
  setIsMenuOpen?: (isOpen: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ setIsMenuOpen }) => {
  const { activeSection, setActiveSection } = useSection()

  const isActive = (name: string): string =>
    activeSection === name ? 'text-primary-500' : ''

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen?.(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const divClass = `w-full text-center color-primary-950 text-[16px] font-semibold
    transition-colors transition-mb duration-200 ease-in-out transition-border duration-200 ease-in-out hover:text-primary-500`

  return (
    <nav className="flex flex-col w-screen fixed z-100 bg-white top-0 left-0 md:grid md:grid-cols-2 border py-3">
      {/* Logo */}
      <div className="ml-32">
        <div className="flex items-center gap-3 hover:cursor-pointer" onClick={() => handleNavLinkClick('hero')}>
          <Image alt="Logo" src={Logo as string} className="h-9 w-auto" />
          <h6 className="text-lg font-semibold">
            StudyCrew
          </h6>
        </div>
      </div>

      {/* Nav Links */}
      <div className="grid grid-cols-4 pr-32 gap-auto justify-start items-center">
        <div
          className={`${isActive('mission')} ${divClass} hover:cursor-pointer`}
          onClick={() => handleNavLinkClick('mission')}
        >
          Mission
        </div>
        <div
          className={`${isActive('features')} ${divClass} hover:cursor-pointer`}
          onClick={() => handleNavLinkClick('features')}
        >
          Features
        </div>

        <div
          className={`${isActive('project')} ${divClass} hover:cursor-pointer`}
          onClick={() => handleNavLinkClick('project')}
        >
          Project
        </div>

        <div
          className={`${isActive('development')} ${divClass} hover:cursor-pointer`}
          onClick={() => handleNavLinkClick('development')}
        >
          Development
        </div>
      </div>
    </nav>
  )
}

export default Navbar
