'use client'

import { Page } from '@/types'
import Hero from '@/components/hero'
import Team from '@/components/team'
import Faqs from '@/components/faqs'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SignUp from '@/components/sign_up'
import Mission from '@/components/mission'
import Project from '@/components/project'
import scrollToRef from '@/hooks/scrollTo'
import Features from '@/components/features'
import useScrollFadeIn from '@/hooks/useFadeIn'
import { BrowserRouter as Router } from 'react-router-dom'
import React, { useRef, useEffect, useState, useCallback } from 'react'

function App(): JSX.Element {
  const faqRef = useRef(null)
  const teamRef = useRef(null)
  const signupRef = useRef(null)
  const missionRef = useRef(null)
  const projectRef = useRef(null)
  const featuresRef = useRef(null)

  const animatedItem = useScrollFadeIn()
  const [activePage, setActivePage] = useState<Page>(Page.Mission)

  const handleLearnMoreClick = useCallback((): void => {
    setActivePage(Page.Features)
    scrollToRef(featuresRef)
  }, [featuresRef])

  const handleJoinWaitlistClick = useCallback((): void => {
    setActivePage(Page.SignUp)
    scrollToRef(signupRef)
  }, [signupRef])

  useEffect(() => {
    const missionNode = missionRef.current
    const featuresNode = featuresRef.current
    const projectNode = projectRef.current
    const teamNode = teamRef.current
    const signupNode = signupRef.current
    const faqNode = faqRef.current

    // Callback to handle what happens when the elements intersect
    const callback = (entries: any): void => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // Setting the active page based on the intersecting component
          switch (entry.target.className) {
            case 'mission-component':
              setActivePage(Page.Mission)
              break
            case 'features-component':
              setActivePage(Page.Features)
              break
            case 'project-component':
              setActivePage(Page.Project)
              break
            case 'empower-component':
              setActivePage(Page.SignUp)
              break
            case 'team-component':
              setActivePage(Page.Team)
              break
            case 'faq-component':
              setActivePage(Page.FAQ)
              break
            default:
              break
          }
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    })

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

      if (teamNode) {
        observer.unobserve(teamNode)
      }

      if (signupNode) {
        observer.unobserve(signupNode)
      }

      if (faqNode) {
        observer.unobserve(faqNode)
      }
    }
  }, [])

  // Component render
  return (
    <Router>
      {/* Header with page navigation props */}

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

      {/* Various site sections */}
      <Hero
        handleLearnMoreClick={handleLearnMoreClick}
        handleJoinWaitlistClick={handleJoinWaitlistClick}
        {...animatedItem}
      />

      <div className="mission-component" ref={missionRef}>
        <Mission {...animatedItem} />
      </div>

      <div className="features-component" ref={featuresRef}>
        <Features {...animatedItem} />
      </div>

      <div className="project-component" ref={projectRef}>
        <Project {...animatedItem} />
      </div>

      <div className="empower-component" ref={signupRef}>
        <SignUp {...animatedItem} />
      </div>

      <div className="team-component" ref={teamRef}>
        <Team {...animatedItem} />
      </div>

      <div className="faq-component" ref={faqRef}>
        <Faqs {...animatedItem} />
      </div>

      {/* Footer */}
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
