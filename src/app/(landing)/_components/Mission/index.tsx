import React from 'react'
import Image from 'next/image'

import {
  ChevronGradientSVG,
  ChevronWhiteSVG,
  SecondChevronGradientSVG
} from './MissionArrows'
import LOGO_GROUP_SVG from 'public/assets/mission/LogoGroup.svg' assert { type: 'svg' }

const Mission = (props: any): JSX.Element => {
  return (
    <div>
      <ChevronGradientSVG {...props} />
      <ChevronWhiteSVG {...props} />
      <SecondChevronGradientSVG {...props} />
      <div className="px-32 pb-20 bg-gradient-to-r from-primary-500 to-gradient-500 h-full relative flex flex-col justify-center z-10 md:top-[125px] top-[110px]">
        <div className="grid grid-cols-2 mt-32 gap-16 align-center">
          <div className="flex justify-center md:justify-start mb-8">
            <div>
              <h3 className="text-zircon-50 text-xl font-semibold">
                OUR MISSION
              </h3>
              <h2 className="text-white mb-4 leading-none">
                We support education for all.
              </h2>
              <p className="text-zircon-50">
                We are dedicated to making education more accessible,
                collaborative, and engaging through the development of an
                open-source online learning platform. This platform will support
                students on their learning journey and empower them to
                exploretheir passions together. Our vision is to provide every
                student with the resources and community they need to achieve
                their full potential.
              </p>
            </div>
          </div>
          <div className="md:flex hidden justify-end">
            <Image
              height={600}
              alt="Mission Logos"
              src={LOGO_GROUP_SVG as string}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
