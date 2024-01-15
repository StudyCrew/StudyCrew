import React from 'react'
import Image from 'next/image'
import scrollToRef from '@/lib/hooks/scrollTo'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaDiscord,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa'

import Logo from '../../public/assets/Logo.svg'

import { type FooterProps } from './types'

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
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

  // Helper function to determine if a link is active
  const isActive = (name: string): string =>
    activePage === name ? 'activeNavLink' : ''

  // Handles the navigation link click based on the section's name
  const handleNavLinkClick = (name: string): void => {
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
    <div className="bg-zircon-50 grid grid-cols-3 lg:grid-cols-5 gap-4 px-6 lg:px-[150px] py-6 items-center">
      {/* Footer logo */}
      <div className="flex items-center justify-center lg:justify-start col-span-1">
        {/* SVG Logo */}
        <Image alt="Logo" src={Logo} className="w-10" />
        <h3 className="footer-title heading-font ml-4 font-semibold">
          StudyCrew
        </h3>
      </div>

      {/* Footer menu */}
      <div className="col-span-1 lg:col-span-2 ml-12">
        <ul className="flex justify-center lg:justify-start gap-4">
          <li
            className={`${isActive('mission')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('mission')
              setActivePage('mission')
            }}
          >
            Mission
          </li>
          <li
            className={`${isActive('features')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('features')
              setActivePage('features')
            }}
          >
            Features
          </li>
          <li
            className={`${isActive('project')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('project')
              setActivePage('project')
            }}
          >
            Project
          </li>
          <li
            className={`${isActive('signup')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('signup')
              setActivePage('signup')
            }}
          >
            Sign Up
          </li>
          <li
            className={`${isActive('team')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('team')
              setActivePage('team')
            }}
          >
            Team
          </li>
          <li
            className={`${isActive('faq')} hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('faq')
              setActivePage('faq')
            }}
          >
            FAQs
          </li>
        </ul>
        <hr />
      </div>

      {/* Social media icons */}
      <div className="col-span-1 lg:col-span-2">
        <ul className="flex justify-center lg:justify-end gap-4">
          <li>
            <FaGithubSquare size={20} />
          </li>
          <li>
            <FaInstagram size={20} />
          </li>
          <li>
            <FaYoutube size={20} />
          </li>
          <li>
            <FaFacebookF size={20} />
          </li>
          <li>
            <FaLinkedin size={20} />
          </li>
          <li>
            <FaTiktok size={20} />
          </li>
          <li>
            <FaDiscord size={20} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
