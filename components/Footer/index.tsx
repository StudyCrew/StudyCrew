import React from 'react'
import Image from 'next/image'
import scrollToRef from '@/lib/hooks/scrollTo'
import { FaTwitter, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

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
    <div className="bg-zircon-50 flex-column lg:flex">
      {/* Footer logo */}
      <div className="flex-column items-center lg:pl-16 lg:mr-16 py-6">
        {/* SVG Logo */}
        <Image alt="Logo" src={Logo} className="mx-auto w-10" />
        <h3 className="footer-title heading-font text-center mt-2 mb-0 font-semibold">
          StudyCrew
        </h3>
        <a
          target="blank"
          href="mailto:info@studycrew.world"
          className="block text-center text-sm mb-4 text-black hover:text-black"
        >
          info@studycrew.world
        </a>
        <ul className="flex justify-center mx-auto">
          <li className="mr-4">
            <FaFacebookF size={20} />
          </li>
          <li className="mr-4">
            <FaTwitter size={20} />
          </li>
          <li className="mr-4">
            <FaInstagram size={20} />
          </li>
          <li>
            <FaLinkedin size={20} />
          </li>
        </ul>
      </div>

      <div className="lg:mr-16 py-6 flex-column text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Navigation</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('mission')
                setActivePage('mission')
              }}
            >
              Mission
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('features')
                setActivePage('features')
              }}
            >
              Features
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('project')
                setActivePage('project')
              }}
            >
              Project
            </a>
          </li>
          <li
            className={`${isActive('signup')} hover:underline hover:cursor-pointer`}
            onClick={() => {
              handleNavLinkClick('signup')
              setActivePage('signup')
            }}
          >
            Sign Up
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('signup')
                setActivePage('signup')
              }}
            >
              Sign Up
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('team')
                setActivePage('team')
              }}
            >
              Team
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('faq')
                setActivePage('faq')
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:mr-16 py-6 text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Contribute</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              href="#"
            >
              Github
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              href="#"
            >
              Discord
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              href="#"
            >
              Join Team
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:mr-16 py-6 text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Collaborations</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black no-underline"
              href="#"
            >
              Aquin
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-column lg:px-16 bg-blue-200 pt-6 pb-8 w-full text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Sign Up</h3>
        <p className="text-sm mb-4">
          Ready to transform Your Learning Experience?
        </p>
        <input
          className="mr-4 lg:mr-0 mb-4 border-2 border-blue-300 px-4 py-2 rounded-lg px-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="text-white bg-blue-500 px-4 rounded-lg text-center py-2">
          Join Waitlist
        </button>
      </div>
    </div>
  )
}

export default Footer
