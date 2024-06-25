import React from 'react'
import Image from 'next/image'
import LOGO_GROUP_SVG from 'public/assets/mission/LogoGroup.svg' assert { type: 'svg' }

const Mission = (props: any): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2628 376"
        fill="none"
        className="absolute h-200 w-screen z-5"
        {...props}
        preserveAspectRatio="none"
      >
        <path
          fill="url(#a)"
          d="m0 0 1297.2 264.759c8.37 1.708 12.56 2.563 16.8 2.563s8.43-.855 16.8-2.563L2628
          0v105.002L1330.88 370.545c-8.41 1.722-12.62 2.582-16.88 2.581-4.26-.001-8.47-.865-16.87-2.592L0
          104.085V0Z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={2628}
            x2={-13.254}
            y1={0}
            y2={169.679}
            gradientUnits="userSpaceOnUse"
          >
            <stop style={{ stopColor: 'var(--primary-gradient-color)' }} />
            <stop offset={1} style={{ stopColor: 'var(--primary-color)' }} />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2628 376"
        fill="none"
        className="w-screen absolute h-200 z-3 top-50"
        {...props}
        preserveAspectRatio="none"
      >
        <path
          fill="url(#b)"
          d="m0 0 1297.2 264.759c8.37 1.708 12.56 2.563 16.8 2.563s8.43-.855 16.8-2.563L2628
          0v105.002L1330.88 370.545c-8.41 1.722-12.62 2.582-16.88 2.581-4.26-.001-8.47-.865-16.87-2.592L0
          104.085V0Z"
        />
        <defs>
          <linearGradient
            id="b"
            x1={2628}
            x2={-13.254}
            y1={0}
            y2={169.679}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset={1} stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2628 376"
        fill="none"
        className="w-screen absolute h-200 top-100 z-5"
        {...props}
        preserveAspectRatio="none"
      >
        <path
          fill="url(#a)"
          d="m0 0 1297.2 264.759c8.37 1.708 12.56 2.563 16.8 2.563s8.43-.855 16.8-2.563L2628
          0v105.002L1330.88 370.545c-8.41 1.722-12.62 2.582-16.88 2.581-4.26-.001-8.47-.865-16.87-2.592L0
          104.085V0Z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={2628}
            x2={-13.254}
            y1={0}
            y2={169.679}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="stop-first" />
            <stop offset={1} stopColor="#stop-second" />
          </linearGradient>
        </defs>
      </svg>

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
