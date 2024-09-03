import Image from 'next/image'
import _isEmpty from 'lodash/isEmpty'
import React, { useState, useCallback } from 'react'
import { FaYoutube, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

import { scrollToRef } from '@/hooks'
import LOGO_SVG from 'public/assets/Logo.svg' assert { type: 'svg' }

import { type FooterProps } from './types'

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef
  } = props

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
    <div className="bg-zircon-50 flex-column lg:flex lg:justify-around lg:items-center lg:w-full">
      <div className="flex-column items-center lg:pl-16 lg:mr-16 py-6">
        <Image alt="Logo" src={LOGO_SVG as string} className="mx-auto w-10" />
        <h3 className="footer-title heading-font text-center mt-2 mb-0 font-semibold">
          StudyCrew
        </h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@studycrew.world"
          className="block text-center text-sm mb-4 text-black visited:text-black hover:text-black"
        >
          info@studycrew.world
        </a>
        <ul className="flex justify-center mx-auto">
          <li className="mr-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555998230454"
              className="text-black visited:text-black hover:text-black"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.youtube.com/channel/UCpeI7Q-WPZ88Uv1KCqs814Q"
              className="text-black visited:text-black hover:text-black"
              rel="noreferrer"
              target="_blank"
            >
              <FaYoutube size={20} />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.instagram.com/studycrew.world/"
              className="text-black visited:text-black hover:text-black"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/studycrewofficial"
              className="text-black visited:text-black hover:text-black"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:mr-16 py-6 flex-column text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Navigation</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
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
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
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
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
              onClick={() => {
                handleNavLinkClick('project')
                setActivePage('project')
              }}
            >
              Project
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
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
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
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
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
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
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
              href="https://github.com/StudyCrew"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
              href="https://discord.gg/j5d7PMes"
              rel="noreferrer"
              target="_blank"
            >
              Discord
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
              href="https://forms.gle/CBKSjovcWeRGWbg2A"
              rel="noreferrer"
              target="_blank"
            >
              Join Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
