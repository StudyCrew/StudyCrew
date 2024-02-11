import React from 'react'
import Image from 'next/image'

import LogoGroup from '../../public/assets/mission/LogoGroup.svg'

import './style.css'
import MissionChevronColour from '../homepage/MissionChevronColour'
import MissionChevronWhite from '../homepage/MissionChevronWhite'
import MissionChevronLowerColour from '../homepage/MissionChevronLowerColour'

/**
 * Project Component
 *
 * This component displays information about our mission and consists of:
 * - Our mission statement
 * - Three large StudyCrew logos in the right column
 */

const Mission = (props: any): JSX.Element => {
  return (
    <div>
      {/* First gradient chevron */}
      {/* This SVG creates a chevron with a gradient fill. */}
      {/* The gradient colors are defined by "stop-first" and "#stop-second", which seem
      to be placeholders and might need to be replaced with actual color values. */}
      <MissionChevronColour />

      {/* Space Chevron */}
      {/* This SVG creates a white chevron. */}
      <MissionChevronWhite />

      {/* Second gradient chevron */}
      {/* This SVG is similar to the first gradient chevron. */}
      <MissionChevronLowerColour />

      {/* Main content */}
      <div className="bg-gradient-to-r from-primary-500 to-gradient-500 2xl:h-85vh h-75vh max-w-100vw relative flex top-36 px-6 lg:px-36 z-1">
        {/* Left column with text */}
        <div className="top-28 lg:top-20vh relative w-full lg:w-1/2 sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <div className="flex flex-col">
            <h3 className="text-zircon-50 lg:pb-4 pb-1 mb-0 2xl:top-24 lg:top-16 relative">
              OUR MISSION
            </h3>
            <h2 className="text-zircon-50 slogan 2xl:top-24 lg:top-16 relative leading-12">
              We support education for all.
            </h2>
            <p className="absolute mr-5% lg:top-80 top-60 text-white">
              StudyCrew is committed to making education accessible,
              collaborative, and engaging through innovative learning platforms.
              Our vision is to provide every student with the resources and
              community they need to reach their full potential.
            </p>
          </div>
        </div>

        {/* Right column with logos */}
        <div className="relative w-full lg:w-1/2 items-center hidden lg:flex">
          <Image alt="Mission Logos" src={LogoGroup} width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default Mission
