'use client'

import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Button from '@/app/(landing)/_components/Button'

const words = ['Collaborative', 'Accessible', 'Engaging']

const Hero = (): JSX.Element => {
  const handleLearnMoreClick = (): void => {
    // Smooth scroll to the "Learn More" section
    const learnMoreSection = document.getElementById('mission')
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleViewOnGitHubClick = (): void => {
    // Open the GitHub page in a new tab
    window.open('https://github.com/StudyCrew/StudyCrew', '_blank')
  }

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
    <div className="mx-16 mt-44 mb-16 text-center">
      <h1 className="text-5xl leading-normal md:text-7xl md:leading-tight font-medium">
        The Future of Education is <br />
        <span
          style={{ opacity }}
          className="transition-opacity duration-500 animate-[fade-in_0.5s_linear] bg-gradient-to-r from-primary-500 to-gradient-500 bg-clip-text text-transparent"
        >
          {currentWord}
        </span>
      </h1>

      <p className="mt-4 text-xl font-normal text-secondary-text-700">
        Breaking barriers to education through the power of open source.
      </p>

      <div className="mt-12 flex flex-row gap-5 justify-center align-middle">
        <Button onClick={handleLearnMoreClick} variant="primary" size="big">
          Learn More
          <FaChevronDown className="inline ml-2" />
        </Button>

        <Button onClick={handleViewOnGitHubClick} variant="outline" size="big">
          View on GitHub
          <FaChevronRight className="inline ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default Hero
