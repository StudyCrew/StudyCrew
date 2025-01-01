'use client'

import Image from 'next/image'
import React from 'react'

import { scrollToRef } from '@/hooks'

import { type FooterProps } from './types'

const FooterNavigation: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const { setActivePage, missionRef, featuresRef, projectRef } = props

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
      default:
        return
    }
    scrollToRef(ref)
  }

  return (
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
  )
}

export default FooterNavigation