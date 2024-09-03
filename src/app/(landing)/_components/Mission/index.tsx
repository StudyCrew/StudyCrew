import React from 'react'
import Image from 'next/image'
import MissionSection from './mission_section'

import LOGO_GROUP_SVG from 'public/assets/mission/LogoGroup.svg' assert { type: 'svg' }

const Mission = () => {
  return (
    <div>
      <MissionSection />
      <div className="bg-gradient-to-r from-primary-500 to-gradient-500 h-full relative flex flex-col justify-center px-6 lg:px-36 z-1 top-36 mx-auto">
        <div className="flex flex-col md:flex-row items-center mt-32 gap-8">
          <div className="lg:w-1/2 flex justify-center md:justify-start mb-8">
            <div className="max-w-md text-2xl lg:mb-8">
              <h3 className="text-zircon-50">OUR MISSION</h3>
              <h2 className="text-zircon-50 slogan mb-4 leading-12">
                We support education for all.
              </h2>
              <p className="text-white">
                StudyCrew is committed to making education accessible,
                collaborative, and engaging through innovative learning
                platforms. Our vision is to provide every student with the
                resources and community they need to reach their full potential.
              </p>
            </div>
          </div>
          <div className="md:flex md:justify-end md:my-8 hidden">
            <Image
              width={600}
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
