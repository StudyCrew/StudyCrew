'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type SectionContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
}

const SectionContext = createContext<SectionContextType>({
  activeSection: '',
  setActiveSection: () => {},
})

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    })

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => useContext(SectionContext)