'use client'

import Hero from '@/app/(landing)/_components/Hero'
import Team from '@/app/(landing)/_components/Team'
import Faqs from '@/app/(landing)/_components/FAQs'
import { scrollToRef } from '@/hooks'
import Header from '@/app/(landing)/_components/Header'
import SignUp from '@/app/(landing)/_components/SignUp'
import Footer from '@/app/(landing)/_components/Footer'
import Mission from '@/app/(landing)/_components/Mission'
import Project from '@/app/(landing)/_components/Project'
import Features from '@/app/(landing)/_components/Features'
import React, { useRef, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App(): JSX.Element {
  const handleLearnMoreClick = (): void => {
    setActivePage('features')
    scrollToRef(featuresRef)
  }
  const handleJoinWaitlistClick = (): void => {
    setActivePage('signup')
    scrollToRef(signupRef)
  }

  const [activePage, setActivePage] = useState('')

  const missionRef = useRef(null)
  const featuresRef = useRef(null)
  const projectRef = useRef(null)
  const teamRef = useRef(null)
  const signupRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const missionNode = missionRef.current
    const featuresNode = featuresRef.current
    const projectNode = projectRef.current
    const teamNode = teamRef.current
    const signupNode = signupRef.current
    const faqNode = faqRef.current

    // TODO: Refactor this entire approach. For now, the linter rules are
    //       disabled.
    const callback = (entries: any): void => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      entries.forEach((entry: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (entry.isIntersecting) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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

            case 'empower-component':
              setActivePage('signup')
              break

            case 'team-component':
              setActivePage('team')
              break

            case 'faq-component':
              setActivePage('faq')
              break

            default:
              break
          }
        }
      })
    }

    const options = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(callback, options)

    if (missionNode) {
      observer.observe(missionNode)
    }

    if (featuresNode) {
      observer.observe(featuresNode)
    }

    if (projectNode) {
      observer.observe(projectNode)
    }

    if (teamNode) {
      observer.observe(teamNode)
    }

    if (signupNode) {
      observer.observe(signupNode)
    }

    if (faqNode) {
      observer.observe(faqNode)
    }

    return () => {
      if (missionNode) {
        observer.unobserve(missionNode)
      }

      if (featuresNode) {
        observer.unobserve(featuresNode)
      }

      if (projectNode) {
        observer.unobserve(projectNode)
      }

      if (signupNode) {
        observer.unobserve(signupNode)
      }

      if (signupNode) {
        observer.unobserve(signupNode)
      }

      if (faqNode) {
        observer.unobserve(faqNode)
      }
    }
  }, [])

  return (
    <Router>
      <div className="header">
        <Header
          missionRef={missionRef}
          featuresRef={featuresRef}
          projectRef={projectRef}
          teamRef={teamRef}
          signupRef={signupRef}
          faqRef={faqRef}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      <Hero
        handleLearnMoreClick={handleLearnMoreClick}
        handleJoinWaitlistClick={handleJoinWaitlistClick}
      />
      <div className="mission-component" ref={missionRef}>
        <Mission />
      </div>

      <div className="features-component" ref={featuresRef}>
        <Features />
      </div>

      <div className="project-component" ref={projectRef}>
        <Project />
      </div>

      <div className="empower-component" ref={signupRef}>
        <SignUp />
      </div>

      <div className="team-component" ref={teamRef}>
        <Team />
      </div>

      <div className="faq-component" ref={faqRef}>
        <Faqs />
      </div>

      <div className="footer-component">
        <Footer
          missionRef={missionRef}
          featuresRef={featuresRef}
          projectRef={projectRef}
          teamRef={teamRef}
          signupRef={signupRef}
          faqRef={faqRef}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </Router>
  )
}

export default App
