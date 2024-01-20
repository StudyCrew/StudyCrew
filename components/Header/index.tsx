// Importing necessary CSS and components
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/Logo.svg'

import Navbar from '../Navbar'
import Button from '../Button'

import { type HeaderProps } from './types'
import './style.css'

const Header: React.FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
  const {
    activePage,
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef
  } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>
      {/* Logo and application name section */}
      <div
        onClick={() => {
          setActivePage('')
        }}
        className="header-items logo-container"
      >
        <Image alt="Logo" src={Logo} className="w-8 mx-auto pl-3" />
        <Link to="/" className="logo-name">
          StudyCrew
        </Link>
      </div>

      {/* Conditionally render this div based on isMenuOpen state */}
      {isMenuOpen && (
        <div className={`mobile-navbar ${isMenuOpen ? 'open' : ''}`}>
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            missionRef={missionRef}
            featuresRef={featuresRef}
            projectRef={projectRef}
            teamRef={teamRef}
            signupRef={signupRef}
            faqRef={faqRef}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}

      {/* This will always be rendered, but hidden on mobile */}
      <div className="desktop-navbar">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          missionRef={missionRef}
          featuresRef={featuresRef}
          projectRef={projectRef}
          teamRef={teamRef}
          signupRef={signupRef}
          faqRef={faqRef}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <div className="header-items waitlist-container">
        <Link className="waitlistLink" to="/">
          <Button
            onClick={() => {
              setActivePage('signup')
              const refContainerCurrent =
                signupRef.current as HTMLDivElement | null
              if (refContainerCurrent) {
                const y =
                  refContainerCurrent.getBoundingClientRect().top +
                  window.scrollY +
                  -60
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
            size="small"
          >
            Join Waitlist
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
