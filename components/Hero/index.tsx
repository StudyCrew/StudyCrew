import { FaChevronDown } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

import Button from '../Button'

import { type HeroProps } from './types'
import './style.css' // Importing styling specific to the Hero component

/**
 * Hero Component
 *
 * This component represents the hero section of a webpage, typically used
 * on the landing page. It contains a title, a description, and a group of buttons.
 *
 * The title has decorative SVG elements and the description emphasizes certain words
 * with a primary text color. The buttons navigate to the waitlist page and have different
 * styles and sizes.
 *
 * @returns {React.Element} The rendered Hero component.
 */

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
      setOpacity(1) // Fade in the new word
    }

    const interval = setInterval(() => {
      setOpacity(0) // Fade out the current word
      setTimeout(changeWord, 200)
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="hero">
      <div className="hero-container">
        {/* Title with decorative SVG elements */}
        <h1 className="title title-sm">
          The{' '}
          <span className="relative-span">
            <span className="relative-span heading-font">Future </span>
          </span>
          of Education is <br />
          <span className="relative-span">
            <span
              className="relative-span heading-font text-transition text-gradient huge-font"
              style={{ opacity }}
            >
              {' '}
              {currentWord}
            </span>
          </span>
        </h1>

        {/* Description with emphasized words */}
        <p className="description">
          Opening doors to new learning experiences for everyone.
        </p>

        {/* Group of buttons with different styles and sizes */}
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

// Exporting the Hero component for use in other files
export default Hero