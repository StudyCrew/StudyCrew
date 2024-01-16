import classNames from 'classnames'
import { FaChevronDown } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

import Button, { ButtonSize, ButtonVariant } from '../Button'

import { HeroWord, type HeroProps } from './types'
import { CLASS_NAME, WORDS } from './const'
import './style.scss'

const Hero: React.FC<HeroProps> = (props: HeroProps): JSX.Element => {
  const { className, handleLearnMoreClick, handleJoinWaitlistClick } = props

  const [opacity, setOpacity] = useState<number>(1)
  const finalClassName = classNames(CLASS_NAME, className)
  const [currentWord, setCurrentWord] = useState<HeroWord>(
    HeroWord.Collaborative
  )

  useEffect(() => {
    const changeWord = (): void => {
      setCurrentWord((prevWord: HeroWord): HeroWord => {
        const nextIndex = (WORDS.indexOf(prevWord) + 1) % WORDS.length

        return HeroWord[WORDS[nextIndex] as keyof typeof HeroWord]
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
  }, [setOpacity, setCurrentWord])

  return (
    <div className={finalClassName}>
      <div className={`${CLASS_NAME}-container`}>
        <h1 className={`${CLASS_NAME}-title title-sm`}>
          The{' '}
          <span className={`${CLASS_NAME}-relative-span`}>
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              preserveAspectRatio="none"
              className={`${CLASS_NAME}-blue-wave`}
            ></svg>

            <span className="heading-font">Future </span>
          </span>
          of Education is <br />
          <span className={`${CLASS_NAME}-relative-span`}>
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              preserveAspectRatio="none"
              className={`${CLASS_NAME}-blue-wave`}
            ></svg>

            <span
              style={{ opacity }}
              className={classNames(
                'relative-span heading-font',
                'text-transition text-gradient huge-font'
              )}
            >
              {' '}
              {currentWord}
            </span>
          </span>
        </h1>

        <p className={`${CLASS_NAME}-description`}>
          Opening doors to new learning experiences for everyone.
        </p>

        <div className={`${CLASS_NAME}-button-group`}>
          <Button onClick={handleJoinWaitlistClick} size={ButtonSize.Big}>
            Join Waitlist
            <FaChevronDown className="icon-inline" />
          </Button>

          <Button
            onClick={handleLearnMoreClick}
            variant={ButtonVariant.Outline}
            size={ButtonSize.BigOutline}
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
