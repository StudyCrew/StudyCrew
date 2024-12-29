'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSection } from '../SectionContext'
import Logo from 'public/assets/LogoIcon.svg'
import { FaBars } from 'react-icons/fa'

type NavbarProps = {
  setIsMenuOpen?: (isOpen: boolean) => void
}

const Navbar = () => {
  const { activeSection, setActiveSection } = useSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navbarRef.current) {
      setMenuTop(navbarRef.current.clientHeight)
    }
  }, [navbarRef.current?.clientHeight])

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

  const navLinkStyle = `w-full text-center color-primary-950 text-md font-semibold
    transition-colors transition-mb duration-200 ease-in-out transition-border duration-200 ease-in-out hover:text-primary-500`

  const navLinkStyleMobile = `text-left color-primary-950 ml-7 text-md font-semibold
  transition-colors transition-mb duration-200 ease-in-out transition-border duration-200 ease-in-out hover:text-primary-500`

  return (
    <div>
      <nav
        ref={navbarRef}
        className="flex items-center justify-between w-screen fixed z-50 bg-white top-0 left-0 md:grid md:grid-cols-2 border-b border-gray-200 py-3"
      >
        {/* Logo */}
        <div className="md:ml-32 ml-7">
          <div
            className="flex items-center gap-3 hover:cursor-pointer"
            onClick={() => handleNavLinkClick('hero')}
          >
            <Image alt="Logo" src={Logo as string} className="h-9 w-auto" />
            <h6 className="text-lg font-semibold">StudyCrew</h6>
          </div>
        </div>

        {/* Nav Links */}
        <div className="md:grid hidden grid-cols-4 mr-32 gap-auto justify-end text-right items-center">
          <div
            className={`${isActive('mission')} ${navLinkStyle} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('mission')}
          >
            Mission
          </div>
          <div
            className={`${isActive('features')} ${navLinkStyle} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('features')}
          >
            Features
          </div>

          <div
            className={`${isActive('project')} ${navLinkStyle} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('project')}
          >
            Project
          </div>

          <div
            className={`${isActive('development')} ${navLinkStyle} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('development')}
          >
            Development
          </div>
        </div>

        <div
          className="hamburger-menu mr-7 md:hidden visible"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="grid grid-cols-1 gap-2 relative bg-white py-3 border-b border-gray-200 z-40 text-left" style={{ top: menuTop }}>
          <div
            className={`${isActive('mission')} ${navLinkStyleMobile} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('mission')}
          >
            Mission
          </div>
          <div
            className={`${isActive('features')} ${navLinkStyleMobile} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('features')}
          >
            Features
          </div>

          <div
            className={`${isActive('project')} ${navLinkStyleMobile} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('project')}
          >
            Project
          </div>

          <div
            className={`${isActive('development')} ${navLinkStyleMobile} hover:cursor-pointer`}
            onClick={() => handleNavLinkClick('development')}
          >
            Development
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar