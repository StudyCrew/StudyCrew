'use client'

import React from 'react'
import { useSection } from '../SectionContext'

type NavbarProps = {
  setIsMenuOpen?: (isOpen: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ setIsMenuOpen }) => {
  const { activeSection, setActiveSection } = useSection()

  const isActive = (name: string): string =>
    activeSection === name
      ? 'text-primary-500 mb-0 border-solid border-b-[5px] border-primary-500'
      : 'border-none mb-[5px]'

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen?.(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const divClass = `w-full text-center p-[20px] color-primary-950 text-[16px] font-semibold 
    transition-colors transition-mb duration-200 ease-in-out transition-border duration-200 ease-in-out hover:text-primary-500
    md:pt-[15px] md:px-[20px] md:pb-[10px] md:text-center md:w-auto md:rounded-[5px]`

  return (
    <nav className="flex flex-col justify-center items-center w-screen h-screen fixed z-5000 bg-white/90 top-0 left-0 pt-[10px]
      md:inline-grid md:grid-cols-6 md:bg-white/78 md:w-fit md:relative md:col-span-1 md:w-fit md:h-fit md:top-[-10px] md:rounded-b-[5px] md:backdrop-blur-md md:shadow-[0_0_10px_0_#ddd]">
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
    </nav>
  )
}

export default Navbar