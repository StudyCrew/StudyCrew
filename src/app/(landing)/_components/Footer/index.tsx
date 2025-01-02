import Image from 'next/image'
import React from 'react'

import LOGO from 'public/assets/LogoIcon.svg' assert { type: 'svg' }
import GITHUB_LOGO from 'public/assets/landing_page/github_logo.svg' assert { type: 'svg' }
import LINKEDIN_LOGO from 'public/assets/landing_page/linkedin_logo.png'
import INSTAGRAM_LOGO from 'public/assets/landing_page/instagram_logo.svg' assert { type: 'svg' }

import Navigation from '../Navigation'

const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary-950 text-primary-100">
      <div className="md:mx-32 mx-7 flex md:flex-row flex-col justify-between py-11 md:gap-10 gap-6">
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
            className="text-center text-sm md:block hidden"
          >
            info@studycrew.world
          </a>
        </div>

        {/* Right section */}
        <div className="flex flex-col text-center lg:text-left w-full gap-2.5 my-auto">
          <div className="flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-0">
            <ul className="flex gap-4 justify-center lg:justify-end order-first lg:order-last">
              <li>
                <a
                  href="https://github.com/StudyCrew/StudyCrew"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image
                    src={GITHUB_LOGO}
                    className="md:h-5 h-7 w-auto"
                    alt="GitHub Logo"
                  />
                  <span className="hidden md:block">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/studycrewofficial"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image
                    src={LINKEDIN_LOGO}
                    className="md:h-5 h-7 w-auto"
                    alt="LinkedIn Logo"
                  />
                  <span className="hidden md:block">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/studycrew.world"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center font-medium"
                >
                  <Image
                    src={INSTAGRAM_LOGO}
                    className="md:h-5 h-7 w-auto"
                    alt="Instagram Logo"
                  />
                  <span className="hidden md:block">Instagram</span>
                </a>
              </li>
            </ul>

            <div className="w-full h-[1px] bg-gradient-to-r from-primary-500 to-gradient-500 block md:hidden md:mt-0 mt-2"></div>

            <div className="flex gap-3 justify-center lg:justify-start order-last lg:order-first">
              <Navigation linkClassName="md:text-lg font-medium text-md" />
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-primary-500 to-gradient-500 md:mt-0 mt-2"></div>

          <div className="md:text-sm text-xs font-light md:mt-0 mt-3">
            This homepage was designed by Kian Bonci and the StudyCrew team.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
