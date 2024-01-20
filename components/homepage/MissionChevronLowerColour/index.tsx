import React from 'react'

const MissionChevronLowerColour = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2628 376"
      fill="none"
      style={{ width: '100%' }}
      className="second-chevron-gradient"
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
  )
}

export default MissionChevronLowerColour