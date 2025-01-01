import Image from 'next/image'
import React from 'react'
import { FaYoutube, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

import LOGO from 'public/assets/LogoIcon.svg' assert { type: 'svg' }

import { type FooterProps } from './types'
import Navigation from '../Navigation'

const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary-950 text-primary-100">
      <div className="mx-32 flex-column lg:flex">
        <div className="flex-column items-center py-6 lg:w-full">
          <Image alt="Logo" src={LOGO as string} className="mx-auto w-10" />
          <h3 className="footer-title heading-font text-center mt-2 mb-0 font-semibold text-white">
            StudyCrew
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@studycrew.world"
            className="block text-center text-sm mb-4"
          >
            info@studycrew.world
          </a>
          <ul className="flex justify-center mx-auto">
            <li className="mr-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555998230454"
                className=""
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.youtube.com/channel/UCpeI7Q-WPZ88Uv1KCqs814Q"
                className=""
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube size={20} />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.instagram.com/studycrew.world/"
                className=""
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/studycrewofficial"
                className=""
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:mr-16 py-6 flex-column text-center lg:text-left">
          <div className="hidden md:grid grid-row gap-auto mr-32 text-right items-center">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
