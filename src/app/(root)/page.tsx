'use client'

import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Faqs from '@/components/FAQs'
import Header from '@/components/Header'
import SignUp from '@/components/SignUp'
import Footer from '@/components/Footer'
import Mission from '@/components/Mission'
import Project from '@/components/Project'
import scrollToRef from '@/hooks/scrollTo'
import Features from '@/components/Features'
import useScrollFadeIn from '@/hooks/useFadeIn'
import React, { useEffect, useState } from 'react'
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
  const animatedItem = useScrollFadeIn()

  const [activePage, setActivePage] = useState('')

  const missionRef = React.useRef(null)
  const featuresRef = React.useRef(null)
  const projectRef = React.useRef(null)
  const teamRef = React.useRef(null)
  const signupRef = React.useRef(null)
  const faqRef = React.useRef(null)

  useEffect(() => {
    const missionNode = missionRef.current
    const featuresNode = featuresRef.current
    const projectNode = projectRef.current
    const teamNode = teamRef.current
    const signupNode = signupRef.current
    const faqNode = faqRef.current

    const callback = (entries: any): void => {
      entries.forEach((entry: any) => {
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

    if (missionNode) observer.observe(missionNode)
    if (featuresNode) observer.observe(featuresNode)
    if (projectNode) observer.observe(projectNode)
    if (teamNode) observer.observe(teamNode)
    if (signupNode) observer.observe(signupNode)
    if (faqNode) observer.observe(faqNode)

    return () => {
      if (missionNode) observer.unobserve(missionNode)
      if (featuresNode) observer.unobserve(featuresNode)
      if (projectNode) observer.unobserve(projectNode)
      if (teamNode) observer.unobserve(teamNode)
      if (signupNode) observer.unobserve(signupNode)
      if (faqNode) observer.unobserve(faqNode)
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
