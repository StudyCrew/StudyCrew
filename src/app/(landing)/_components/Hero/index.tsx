'use client'

import { FaChevronDown } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Button from '@/app/(landing)/_components/Button'

const words = ['Collaborative', 'Accessible', 'Engaging']

const Hero = (): JSX.Element => {
  const handleLearnMoreClick = (): void => {
    console.log('Learn More Clicked')
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

      <p className="mt-3 text-xl font-normal text-secondary-text-700">
        Breaking barriers to education through the power of open source.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-2 justify-center align-middle">
        <Button
          onClick={handleLearnMoreClick}
          variant="outline"
          size="big-outline"
        >
          Learn More
          <FaChevronDown className="inline ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default Hero
