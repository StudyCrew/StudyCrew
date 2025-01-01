import Image from 'next/image'
import React from 'react'
import { FaYoutube, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

import LOGO from 'public/assets/LogoIcon.svg' assert { type: 'svg' }
import GITHUB_LOGO from 'public/assets/Footer/github_logo.svg' assert { type: 'svg' }
import LINKEDIN_LOGO from 'public/assets/Footer/linkedin_logo.png'
import INSTAGRAM_LOGO from 'public/assets/Footer/instagram_logo.svg' assert { type: 'svg' }

import Navigation from '../Navigation'

const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary-950 text-primary-100">
      <div className="mx-32 flex justify-between py-11 gap-10">
        {/* Left section */}
        <div className="flex flex-col items-center">
          <Image alt="Logo" src={LOGO as string} className="w-16" />
          <h3 className="footer-title heading-font text-center font-semibold text-white">
            StudyCrew
          </h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@studycrew.world"
            className="block text-center text-sm"
          >
            info@studycrew.world
          </a>
        </div>

        {/* Right section */}
        <div className="flex flex-col text-center lg:text-left w-full gap-2.5 my-auto">
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <Navigation linkClassName="text-lg font-medium" />
            </div>

            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/StudyCrew/StudyCrew"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image src={GITHUB_LOGO as string} className='h-5 w-auto'/>GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/studycrewofficial/?viewAsMember=true"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image src={LINKEDIN_LOGO as string} className='h-5 w-auto'/>LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/studycrew.world/?utm_source=ig_web_button_share_sheet"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image src={INSTAGRAM_LOGO as string} className='h-5 w-auto'/>Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-primary-500 to-gradient-500"></div>

          <div className="text-sm font-light">
            This homepage was designed by Kian Bonci and the StudyCrew team.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
