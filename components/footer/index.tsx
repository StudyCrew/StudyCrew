import Image from 'next/image'
import classNames from 'classnames'
import React, { useCallback } from 'react'
import scrollToRef from '@/lib/hooks/scrollTo'
import { type IconType } from 'react-icons/fa'

import Logo from '../../public/assets/Logo.svg'

import * as U from './utils'
import { ICONS, CLASS_NAME } from './const'
import { FooterLink, type FooterProps } from './types'

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    className,
    activePage,
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef
  } = props

  const finalClassName = classNames(CLASS_NAME, className)
  const isActive = useCallback(
    (link: FooterLink): boolean => activePage === link,
    [activePage]
  )

  const handleNavLinkClick = useCallback(
    (link: FooterLink): void => {
      const ref = U.getRefForLink(
        {
          missionRef,
          featuresRef,
          projectRef,
          teamRef,
          signupRef,
          faqRef
        },
        link
      )

      if (ref !== null) {
        scrollToRef(ref)
      }
    },
    [missionRef, featuresRef, projectRef, teamRef, signupRef, faqRef, scrollTo]
  )

  const onLinkClick = useCallback(
    (link: FooterLink): void => {
      handleNavLinkClick(link)
      setActivePage(link)
    },
    [handleNavLinkClick, setActivePage]
  )

  return (
    <div
      className={classNames(
        finalClassName,
        'bg-zircon-50 grid grid-cols-3 lg:grid-cols-5 gap-4 px-6',
        'lg:px-[150px] py-6 items-center'
      )}
    >
      <div
        className={classNames(
          'flex items-center justify-center',
          'lg:justify-start col-span-1'
        )}
      >
        <Image alt="Logo" src={Logo} className="w-10" />

        <h3 className="footer-title heading-font ml-4 font-semibold">
          StudyCrew
        </h3>
      </div>

      <div className="col-span-1 lg:col-span-2 ml-12">
        <ul className="flex justify-center lg:justify-start gap-4">
          <li
            onClick={onLinkClick.bind(null, FooterLink.Mission)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.Mission)
            })}
          >
            Mission
          </li>
          <li
            onClick={onLinkClick.bind(null, FooterLink.Features)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.Features)
            })}
          >
            Features
          </li>
          <li
            onClick={onLinkClick.bind(null, FooterLink.Project)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.Project)
            })}
          >
            Project
          </li>
          <li
            onClick={onLinkClick.bind(null, FooterLink.SignUp)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.SignUp)
            })}
          >
            Sign Up
          </li>
          <li
            onClick={onLinkClick.bind(null, FooterLink.Team)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.Team)
            })}
          >
            Team
          </li>
          <li
            onClick={onLinkClick.bind(null, FooterLink.FAQ)}
            className={classNames('hover:cursor-pointer', {
              activeNavLink: isActive(FooterLink.FAQ)
            })}
          >
            FAQs
          </li>
        </ul>
        <hr />
      </div>

      <div className="col-span-1 lg:col-span-2">
        <ul className="flex justify-center lg:justify-end gap-4">
          {ICONS.map((icon: IconType, index: number) => (
            <li key={index}>
              <icon size={20} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
