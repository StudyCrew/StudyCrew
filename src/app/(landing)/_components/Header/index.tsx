import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from '@/app/(landing)/_components/Navbar'
import Button from '@/app/(landing)/_components/Button'
import Logo from 'public/assets/LogoIcon.svg' assert { type: 'svg' }

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

      <div
        onClick={() => {
          setActivePage('')
        }}
        className="header-items logo-container"
      >
        <Image alt="Logo" src={Logo as string} className="logo-1" />
        <Link to="/" className="logo-name">
          StudyCrew
        </Link>
      </div>

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
