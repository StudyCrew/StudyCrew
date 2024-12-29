'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSection } from '../SectionContext'
import Logo from 'public/assets/LogoIcon.svg'
import { FaBars } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const { activeSection, setActiveSection } = useSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navbarRef.current) {
      setMenuTop(navbarRef.current.clientHeight)
    }
  }, [])

  const isActive = (section: string) =>
    activeSection === section ? 'text-primary-500' : ''

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'mission', label: 'Mission' },
    { id: 'features', label: 'Features' },
    { id: 'project', label: 'Project' },
    { id: 'development', label: 'Development' }
  ]

  const navLinkStyle = `text-md font-semibold color-primary-950 transition duration-200 ease-in-out hover:text-primary-500`
  const navLinkStyleDesktop = `w-full text-center ${navLinkStyle}`
  const navLinkStyleMobile = `ml-7 text-left ${navLinkStyle}`

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 z-50 w-screen bg-white border-b border-gray-200 py-3 flex items-center justify-between md:grid md:grid-cols-2"
      >
        {/* Logo */}
        <div className="ml-7 md:ml-32">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavLinkClick('hero')}
          >
            <Image alt="Logo" src={Logo as string} className="h-9 w-auto" />
            <h6 className="text-lg font-semibold">StudyCrew</h6>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:grid grid-cols-4 gap-auto mr-32 text-right items-center">
          {navLinks.map(({ id, label }) => (
            <div
              key={id}
              className={`${isActive(id)} ${navLinkStyleDesktop} cursor-pointer`}
              onClick={() => handleNavLinkClick(id)}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div
          className="mr-7 md:hidden visible cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="z-40 bg-white border-b border-gray-200 py-6 grid grid-cols-1 gap-2 relative text-left"
          style={{ top: menuTop }}
        >
          {navLinks.map(({ id, label }) => (
            <div
              key={id}
              className={`${isActive(id)} ${navLinkStyleMobile} cursor-pointer`}
              onClick={() => handleNavLinkClick(id)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
