'use client'

import React from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import Button from '@/app/(landing)/_components/Button'

const handleLearnMoreClick = (): void => {
  const learnMoreSection = document.getElementById('mission')
  if (learnMoreSection) {
    learnMoreSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleViewOnGitHubClick = (): void => {
  window.open('https://github.com/StudyCrew/StudyCrew', '_blank')
}

const HeroButtons = () => {
  return (
    <div className="md:mt-11 mt-7 flex md:flex-row flex-col md:gap-5 gap-2 justify-center align-middle">
      <Button onClick={handleLearnMoreClick} variant="primary" size="big">
        Learn More
        <FaChevronDown className="inline ml-2" />
      </Button>

        <Button onClick={handleViewOnGitHubClick} variant="outline" size="big">
          View on GitHub
          <FaChevronRight className="inline ml-2" />
        </Button>
    </div>
  )
}

export default HeroButtons
