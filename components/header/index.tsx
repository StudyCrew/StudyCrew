import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import React, { useCallback, useState, useEffect } from 'react'

import Navbar from '../Navbar'
import Button, { ButtonSize } from '../Button'

import { CLASS_NAME } from './const'
import { type HeaderProps } from './types'
import './style.css'

const Header: React.FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
  const {
    className,
    activePage,
    setActivePage,
    missionRef,
    featuresRef,
    projectRef,
    teamRef,
    signupRef,
    faqRef
  } = props

  const finalClassName = classNames(CLASS_NAME, className)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // TODO: Refactor classList manipulation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const onToggleMenu = useCallback((): void => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  const onLogoClick = useCallback((): void => {
    setActivePage('')
  }, [setActivePage])

  const onWaitlistClick = useCallback(() => {
    setActivePage('signup')

    if (signupRef.current !== null) {
      const y =
        (signupRef.current as HTMLDivElement).getBoundingClientRect().top +
        window.scrollY +
        -60

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [signupRef.current, window.scrollY, setActivePage])

  return (
    <header className={finalClassName}>
      <div className={`${CLASS_NAME}-hamburger-menu`} onClick={onToggleMenu}>
        <FaBars />
      </div>

      <div
        onClick={onLogoClick}
        className={`${CLASS_NAME}-items ${CLASS_NAME}-logo-container`}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 446 445"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className={`${CLASS_NAME}-logo`}
        >
          <circle
            cx="384.372"
            cy="61.4726"
            r="41.8014"
            fill="#3A86FF"
            fillOpacity="0.9"
          />
          <circle
            cx="42.092"
            cy="169.665"
            r="41.8014"
            fill="#3A86FF"
            fillOpacity="0.9"
          />
          <ellipse
            cx="283.556"
            cy="403.753"
            rx="41.3097"
            ry="40.8179"
            fill="#3A86FF"
            fillOpacity="0.9"
          />
          <mask id="path-4-inside-1_387_2" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M445.846 201.871C445.846 278.765
            402.854
            345.617
            339.596 379.703C330.258 357.898 308.604 342.622 283.382 342.622C250.011 342.622 222.887 369.365
            222.269 402.588C130.536 392.781 57.1788 321.528 44.1611 230.794C76.9663 229.708 103.227 202.773
            103.227 169.703C103.227 143.298 86.4842 120.804 63.0354 112.257C96.0477 45.7293 164.671 0
            243.975 0C277.585 0 309.276 8.21353 337.152 22.7429C328.676 33.2346 323.601 46.5867 323.601
            61.1242C323.601 94.8822 350.968 122.248 384.726 122.248C399.263 122.248 412.614 117.174 423.106
            108.699C437.634 136.573 445.846 168.263 445.846 201.871ZM243.98 242.091C266.633 242.091 284.997
            223.726 284.997 201.073C284.997 178.42 266.633 160.055 243.98 160.055C221.326 160.055 202.962
            178.42 202.962 201.073C202.962 223.726 221.326 242.091 243.98 242.091Z"
            />
          </mask>
          <path
            d="M339.596 379.703L316.615 389.545L327.381 414.683L351.455 401.711L339.596
          379.703ZM222.269
          402.588L219.611 427.447L246.757 430.349L247.265 403.053L222.269 402.588ZM44.1611 230.794L43.3345
          205.807L15.4527 206.73L19.4145 234.344L44.1611 230.794ZM63.0354 112.257L40.6409 101.145L28.2197
          126.177L54.4744 135.746L63.0354 112.257ZM337.152 22.7429L356.599 38.4524L375.793 14.6916L348.707
          0.573594L337.152 22.7429ZM423.106 108.699L445.275 97.1446L431.158 70.0583L407.397 89.2512L423.106
          108.699ZM351.455 401.711C422.483 363.439 470.846 288.322 470.846 201.871H420.846C420.846 269.208
          383.225 327.796 327.737 357.695L351.455 401.711ZM283.382 367.622C298.249 367.622 311.074 376.608
          316.615 389.545L362.577 369.861C349.441 339.189 318.959 317.622 283.382 317.622V367.622ZM247.265
          403.053C247.629 383.428 263.663 367.622 283.382 367.622V317.622C236.36 317.622 198.144 355.302
          197.273 402.124L247.265 403.053ZM19.4145 234.344C34.0502 336.356 116.468 416.42 219.611
          427.447L224.926 377.73C144.604 369.143 80.3074 306.701 68.9077 227.243L19.4145 234.344ZM78.2273
          169.703C78.2273 189.242 62.7067 205.166 43.3345 205.807L44.9878 255.78C91.226 254.25 128.227
          216.303 128.227 169.703H78.2273ZM54.4744 135.746C68.3692 140.81 78.2273 154.137 78.2273
          169.703H128.227C128.227 132.459 104.599 100.798 71.5963 88.7689L54.4744 135.746ZM243.975
          -25C154.813 -25 77.7115 26.4384 40.6409 101.145L85.4298 123.37C114.384 65.0203 174.529 25
          243.975 25V-25ZM348.707 0.573594C317.349 -15.7712 281.703 -25 243.975 -25V25C273.467 25
          301.204 32.1982 325.596 44.9121L348.707 0.573594ZM348.601 61.1242C348.601 52.5088 351.586
          44.6585 356.599 38.4524L317.704 7.03334C305.767 21.8107 298.601 40.6647 298.601
          61.1242H348.601ZM384.726 97.2484C364.775 97.2484 348.601 81.0751 348.601 61.1242H298.601C298.601
          108.689 337.161 147.248 384.726 147.248V97.2484ZM407.397 89.2512C401.191 94.2641 393.341 97.2484
          384.726 97.2484V147.248C405.184 147.248 424.038 140.083 438.815 128.147L407.397 89.2512ZM470.846
          201.871C470.846 164.145 461.618 128.502 445.275 97.1446L400.936 120.254C413.649 144.645 420.846
          172.381 420.846 201.871H470.846ZM259.997 201.073C259.997 209.919 252.826 217.091 243.98
          217.091V267.091C280.44 267.091 309.997 237.534 309.997 201.073H259.997ZM243.98 185.055C252.826
          185.055 259.997 192.227 259.997 201.073H309.997C309.997 164.613 280.44 135.055 243.98
          135.055V185.055ZM227.962 201.073C227.962 192.227 235.133 185.055 243.98 185.055V135.055C207.519
          135.055 177.962 164.613 177.962 201.073H227.962ZM243.98 217.091C235.133 217.091 227.962 209.919
          227.962 201.073H177.962C177.962 237.534 207.519 267.091 243.98 267.091V217.091Z"
            fill="#3A86FF"
            fillOpacity="0.9"
            mask="url(#path-4-inside-1_387_2)"
          />
        </svg>

        <Link to="/" className={`${CLASS_NAME}-logo-name`}>
          StudyCrew
        </Link>
      </div>

      {isMenuOpen && (
        <div className={classNames(`${CLASS_NAME}-mobile-navbar`, 'open')}>
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            missionRef={missionRef}
            featuresRef={featuresRef}
            projectRef={projectRef}
            teamRef={teamRef}
            signupRef={signupRef}
            faqRef={faqRef}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}

      {!isMenuOpen && (
        <div className={`${CLASS_NAME}-desktop-navbar`}>
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            missionRef={missionRef}
            featuresRef={featuresRef}
            projectRef={projectRef}
            teamRef={teamRef}
            signupRef={signupRef}
            faqRef={faqRef}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      )}

      <div className={`${CLASS_NAME}-items ${CLASS_NAME}-waitlist-container`}>
        <Link className={`${CLASS_NAME}-waitlist-link`} to="/">
          <Button size={ButtonSize.Small} onClick={onWaitlistClick}>
            Join Waitlist
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Header
