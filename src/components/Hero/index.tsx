import { FaChevronDown } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

import Button from '@/components/Button'

import { type HeroProps } from './types'
import './style.css'

const words = ['Collaborative', 'Accessible', 'Engaging']

const Hero: React.FC<HeroProps> = (props: HeroProps): JSX.Element => {
  const { handleLearnMoreClick, handleJoinWaitlistClick } = props
  const [currentWord, setCurrentWord] = useState('Collaborative')
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const changeWord = (): void => {
      setCurrentWord((prevWord) => {
        const nextIndex = (words.indexOf(prevWord) + 1) % words.length
        return words[nextIndex]
      })
      setOpacity(1)
    }

    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(changeWord, 200)
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="title title-sm">
          The{' '}
          <span className="relative-span">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="blue-wave"
              preserveAspectRatio="none"
            ></svg>
            <span className="relative-span heading-font">Future </span>
          </span>
          of Education is <br />
          <span className="relative-span">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="blue-wave"
              preserveAspectRatio="none"
            ></svg>
            <span
              className="relative-span heading-font text-transition text-gradient huge-font"
              style={{ opacity }}
            >
              {' '}
              {currentWord}
            </span>
          </span>
        </h1>

        <p className="description">
          Opening doors to new learning experiences for everyone.
        </p>

        <div className="button-group">
          <Button onClick={handleJoinWaitlistClick} size="big">
            Join Waitlist
            <FaChevronDown className="icon-inline" />
          </Button>
          <Button
            onClick={handleLearnMoreClick}
            variant="outline"
            size="big-outline"
          >
            Learn More
            <FaChevronDown className="icon-inline" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
