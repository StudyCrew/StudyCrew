// app/(landing)/_components/ClientObserver.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'

const ClientObserver = ({ children }: { children: React.ReactNode }) => {
  const [activePage, setActivePage] = useState('')
  const missionRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.className) {
            case 'mission-component':
              setActivePage('mission')
              break
            case 'features-component':
              setActivePage('features')
              break
            case 'project-component':
              setActivePage('project')
              break
            case 'development-component':
              setActivePage('development')
              break
            default:
              break
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    })

    const refs = [missionRef.current, featuresRef.current, projectRef.current]

    refs.forEach((ref) => ref && observer.observe(ref))

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref))
    }
  }, [])

  return (
    <>
      <div ref={missionRef}>{children}</div>
      <div ref={featuresRef}>{children}</div>
      <div ref={projectRef}>{children}</div>
    </>
  )
}

export default ClientObserver
