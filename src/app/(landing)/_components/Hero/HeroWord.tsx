'use client'

import React, { useState, useEffect } from 'react'

const words = ['Collaborative', 'Accessible', 'Engaging']

const HeroWord = (): JSX.Element => {
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
    <span
      style={{ opacity }}
      className="transition-opacity duration-500 animate-[fade-in_0.5s_linear] bg-gradient-to-r from-primary-500 to-gradient-500 bg-clip-text text-transparent"
    >
      {currentWord}
    </span>
  )
}

export default HeroWord
