'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { useSection } from '../SectionContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setActiveSection } = useSection()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  return (
    <header className="">
      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </div>

      <div
        onClick={() => setActiveSection('')}
        className="header-items logo-container"
      >
        <Link href="/" className="logo-name">
          StudyCrew
        </Link>
      </div>

      {isMenuOpen && (
        <div className={`mobile-navbar ${isMenuOpen ? 'open' : ''}`}>
          <Navbar setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}

      <div className="desktop-navbar">
        <Navbar setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className="header-items waitlist-container" />
    </header>
  )
}

export default Header
