import Image from 'next/image'
import _isEmpty from 'lodash/isEmpty'
import React, { useState, useCallback } from 'react'
import { FaYoutube, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa'

import { scrollToRef } from '@/hooks'
import { addToWaitlist } from '@/actions/waitlist.actions'
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

  const [waitlistEmail, setWaitlistEmail] = useState<string>('')
  const [waitlistErrorMessage, setWaitlistErrorMessage] = useState<string>('')
  const onChangeWaitlistEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWaitlistEmail(e.target.value)
    },
    [setWaitlistEmail]
  )

  const handleJoinWaitlist = useCallback(async (): Promise<void> => {
    try {
      if (!waitlistEmail) {
        setWaitlistErrorMessage('Please enter your email address.')
        return
      } else if (!/^[\w.%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(waitlistEmail)) {
        setWaitlistErrorMessage('Invalid email address')
        return
      }

      const res = await addToWaitlist(waitlistEmail)

      if (!res) {
        setWaitlistErrorMessage('Failed to join waitlist. Please try again.')
      } else {
        setWaitlistErrorMessage('Successfully joined waitlist!')
        setWaitlistEmail('')
      }
    } catch (error) {
      setWaitlistErrorMessage('Failed to join waitlist. Please try again.')
    }
  }, [waitlistEmail, setWaitlistErrorMessage, setWaitlistEmail])

  const onSubmitWaitlistEmail = useCallback(() => {
    handleJoinWaitlist()
      .then((): void => {
        setWaitlistEmail('')
      })
      .catch((err: Error) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })
  }, [handleJoinWaitlist, waitlistEmail])

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
      <div className="flex-column items-center lg:pl-16 lg:mr-16 py-6 lg:w-full">
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

      <div className="lg:mr-16 py-6 text-center lg:text-left">
        <h3 className="font-bold mt-0 mb-2">Collaborations</h3>
        <ul className="flex-column">
          <li className="hover:underline hover:cursor-pointer">
            <a
              className="text-black hover:underline hover:cursor-pointer hover:text-black visited:text-black no-underline"
              href="https://aquin.app/"
              rel="noreferrer"
              target="_blank"
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
          type="email"
          value={waitlistEmail}
          placeholder="Enter your email"
          onChange={onChangeWaitlistEmail}
          className="mr-4 lg:mr-0 mb-4 border-2 border-blue-300 px-4 py-2 rounded-lg w-3/4"
        />
        <button
          onClick={onSubmitWaitlistEmail}
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
