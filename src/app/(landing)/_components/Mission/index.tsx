import React from 'react'
import Image from 'next/image'

import {
  ChevronGradientSVG,
  ChevronWhiteSVG,
  SecondChevronGradientSVG
} from './MissionArrows'
import LOGO_GROUP_SVG from 'public/assets/landing_page/logo_group.svg' assert { type: 'svg' }

const Mission = (props: any): JSX.Element => {
  return (
    <div>
      <ChevronGradientSVG {...props} />
      <ChevronWhiteSVG {...props} />
      <SecondChevronGradientSVG {...props} />
      <div className="md:px-32 px-7 md:pb-20 pb-11 bg-gradient-to-r from-primary-500 to-gradient-500 relative flex flex-col justify-center z-10 md:top-[125px] top-[110px]">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:mt-32 mt-28 align-left">
          <div className="flex justify-center md:justify-start mb-8">
            <div>
              <h3 className="text-zircon-50 md:text-xl text-lg font-semibold">
                OUR MISSION
              </h3>
              <h2 className="text-white md:mb-4 mb-3 md:text-5xl text-4xl leading-none mt-2">
                We Support Education for All
              </h2>
              <p className="text-zircon-50 md:text-lg text-base">
                We are dedicated to making education more accessible,
                collaborative, and engaging through the development of an
                open-source online learning platform. This platform will support
                students on their learning journey and empower them to explore
                their passions together. Our vision is to provide every student
                with the resources and community they need to achieve their full
                potential.
              </p>
            </div>
          </div>
          <div className="md:flex hidden justify-end">
            <Image alt="Mission Logos" src={LOGO_GROUP_SVG as string} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
