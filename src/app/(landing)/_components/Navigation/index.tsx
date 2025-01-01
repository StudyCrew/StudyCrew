'use client'

import React, { useState } from 'react'
import { useSection } from '../SectionContext'

interface NavigationProps {
  linkClassName?: string
  isActiveClassName?: string
}

const Navigation: React.FC<NavigationProps> = ({ linkClassName = '', isActiveClassName = '' }) => {
  const { activeSection, setActiveSection } = useSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (section: string) =>
    activeSection === section ? `${isActiveClassName}` : ''


  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'mission', label: 'Mission' },
    { id: 'features', label: 'Features' },
    { id: 'project', label: 'Project' },
    { id: 'development', label: 'Development' }
  ]

  return (
    <>
      {navLinks.map(({ id, label }) => (
        <div
          key={id}
          className={`cursor-pointer ${linkClassName} ${isActive(id)}`}
          onClick={() => handleNavLinkClick(id)}
        >
          {label}
        </div>
      ))}
    </>
  )
}

export default Navigation