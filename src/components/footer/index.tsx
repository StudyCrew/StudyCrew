import Image from 'next/image'
import _isEmpty from 'lodash/isEmpty'
import _isUndefined from 'lodash/isUndefined'
import React, { useMemo, useState, useCallback } from 'react'
import { FaYoutube, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

import * as U from '@/utils'
import * as H from '@/hooks'
import { Page } from '@/types'
import Logo from '@/assets/Logo.svg'
import scrollToRef from '@/hooks/scrollTo'
import { cn, validateEmail } from '@/utils'
import { addEmailToWaitlist } from '@/actions/waitlist.actions'

import { type PageRefMapping, type FooterProps } from './types'

const l = U.getLogger('component:footer')

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    faqRef,
    teamRef,
    signupRef,
    missionRef,
    projectRef,
    featuresRef,
    setActivePage
  } = props

  const pageRefs = useMemo(
    (): PageRefMapping => ({
      [Page.FAQ]: faqRef,
      [Page.Team]: teamRef,
      [Page.SignUp]: signupRef,
      [Page.Mission]: missionRef,
      [Page.Project]: projectRef,
      [Page.Features]: featuresRef
    }),
    [faqRef, teamRef, signupRef, missionRef, projectRef, featuresRef]
  )

  const [waitlistEmail, setWaitlistEmail] = useState<string | null>(null)
  const [waitlistErrorMessage, setWaitlistErrorMessage] = useState<string>('')
  const onChangeWaitlistEmail = H.useOnInputChange<HTMLInputElement, string>(
    setWaitlistEmail
  )

  const onClickJoinWaitlist = useCallback((): void => {
    const validationErrorMessage = validateEmail(waitlistEmail ?? '')

    if (validationErrorMessage !== null) {
      setWaitlistErrorMessage(validationErrorMessage)
      return
    }

    addEmailToWaitlist(waitlistEmail ?? '')
      .then((): void => {
        setWaitlistErrorMessage('Successfully joined waitlist!')
        setWaitlistEmail('')
      })
      .catch((err: Error): void => {
        setWaitlistErrorMessage(err.message)
        l.error(U.getErrorMessageForEnv(err))
      })
  }, [waitlistEmail])

  const handleNavLinkClick = useCallback(
    (page: Page): void => {
      const ref = pageRefs[page]

      if (_isUndefined(ref)) {
        l.error(`Tried to navigate to an invalid page: ${page}`)
      } else {
        setActivePage(page)
        scrollToRef(ref)
      }
    },
    [pageRefs]
  )

  return (
    <div
      className={cn(
        'bg-zircon-50 grid grid-cols-3 lg:grid-cols-5 gap-4 px-6',
        'lg:px-[150px] py-6 items-center'
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center lg:justify-start col-span-1'
        )}
      >
        <Image alt="Logo" src={Logo} className="mx-auto w-10" />

        <h3
          className={cn(
            'footer-title heading-font text-center mt-2 mb-0 font-semibold'
          )}
        >
          StudyCrew
        </h3>

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@studycrew.world"
          className={cn(
            'block text-center text-sm mb-4 text-black visited:text-black',
            'hover:text-black'
          )}
        >
          info@studycrew.world
        </a>

        <ul className="flex justify-center mx-auto">
          <li className="mr-4">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-black visited:text-black hover:text-black"
              href="https://www.facebook.com/profile.php?id=61555998230454"
            >
              <FaFacebookF size={20} />
            </a>
          </li>

          <li className="mr-4">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-black visited:text-black hover:text-black"
              href="https://www.youtube.com/channel/UCpeI7Q-WPZ88Uv1KCqs814Q"
            >
              <FaYoutube size={20} />
            </a>
          </li>

          <li className="mr-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/studycrew.world/"
              className="text-black visited:text-black hover:text-black"
            >
              <FaInstagram size={20} />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/studycrewofficial"
              className="text-black visited:text-black hover:text-black"
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
            <button
              type="button"
              onClick={handleNavLinkClick.bind(null, Page.Mission)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Mission
            </button>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <button
              type="button"
              onClick={handleNavLinkClick.bind(null, Page.Features)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Features
            </button>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <a
              href="#"
              onClick={handleNavLinkClick.bind(null, Page.Project)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Project
            </a>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <button
              type="button"
              onClick={handleNavLinkClick.bind(null, Page.SignUp)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Sign Up
            </button>
          </li>
          <li className="hover:underline hover:cursor-pointer">
            <button
              type="button"
              onClick={handleNavLinkClick.bind(null, Page.Team)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Team
            </button>
          </li>

          <li className="hover:underline hover:cursor-pointer">
            <button
              type="button"
              onClick={handleNavLinkClick.bind(null, Page.FAQ)}
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              FAQ
            </button>
          </li>
        </ul>
      </div>

      <div className="lg:mr-16 py-6 text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Contribute</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/StudyCrew"
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Github
            </a>
          </li>

          <li className="hover:underline hover:cursor-pointer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/j5d7PMes"
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Discord
            </a>
          </li>

          <li className="hover:underline hover:cursor-pointer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/CBKSjovcWeRGWbg2A"
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
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
              target="_blank"
              rel="noreferrer"
              href="https://aquin.app/"
              className={cn(
                'text-black hover:underline hover:cursor-pointer',
                'hover:text-black visited:text-black no-underline'
              )}
            >
              Aquin
            </a>
          </li>
        </ul>
      </div>

      <div
        className={cn(
          'flex-column lg:px-16 bg-blue-200 pt-6 pb-8 w-full text-center',
          'lg:text-left'
        )}
      >
        <h3 className="font-bold mt-0 mb-2">Sign Up</h3>
        <p className="text-sm mb-4">
          Ready to transform Your Learning Experience?
        </p>

        <input
          type="email"
          value={waitlistEmail ?? ''}
          placeholder="Enter your email"
          onChange={onChangeWaitlistEmail}
          className={cn(
            'mr-4 lg:mr-0 mb-4 border-2 border-blue-300 px-4 py-2 rounded-lg',
            'w-3/4'
          )}
        />

        <button
          onClick={onClickJoinWaitlist}
          className="text-white bg-blue-500 px-4 rounded-lg text-center py-2"
        >
          Join Waitlist
        </button>

        {!_isEmpty(waitlistErrorMessage) && (
          <p className="text-red-500 text-sm mt-4">{waitlistErrorMessage}</p>
        )}
      </div>
    </div>
  )
}

export default Footer
