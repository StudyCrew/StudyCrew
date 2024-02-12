import classNames from 'classnames'
import React, { useCallback } from 'react'
import scrollToRef from '@/lib/hooks/scrollTo'

import * as U from './utils'

import { NavbarLink, type NavbarProps } from './types'
import { LINKS, CLASS_NAME } from './const'
import './style.scss'

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): JSX.Element => {
  const {
    className,
    activePage,
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef,
    setIsMenuOpen
  } = props

  const finalClassName = classNames(CLASS_NAME, className)
  const isActive = useCallback(
    (name: string): boolean => activePage === name,
    [activePage]
  )

  const handleNavLinkClick = useCallback(
    (link: NavbarLink): void => {
      setIsMenuOpen(false)

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
    [missionRef, featuresRef, projectRef, teamRef, signupRef, faqRef]
  )

  const onLinkClick = useCallback(
    (link: NavbarLink): void => {
      handleNavLinkClick(link)
      setActivePage(link)
    },
    [handleNavLinkClick, setActivePage]
  )

  return (
    <nav className={finalClassName}>
      {LINKS.map((link: NavbarLink, i: number) => (
        <div
          key={i}
          onClick={onLinkClick.bind(null, link)}
          className={classNames('hover:cursor-pointer', {
            activeNavLink: isActive(link)
          })}
        >
          {link}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
export { NavbarLink }
