import React from 'react'
import './Mission.css'
import Image from 'next/image'
import LogoGroup from '../../public/assets/mission/LogoGroup.svg'

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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2628 376"
				fill="none"
				style={{ width: '100%' }}
				className='chevron-gradient'
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

			{/* Space Chevron */}
			{/* This SVG creates a white chevron. */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2628 376"
				fill="none"
				style={{ width: '100%' }}
				className='chevron-white'
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

			{/* Second gradient chevron */}
			{/* This SVG is similar to the first gradient chevron. */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2628 376"
				fill="none"
				style={{ width: '100%' }}
				className='second-chevron-gradient'
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

			{/* Main content */}
			<div className='bg-gradient-to-r from-primary-500 to-gradient-500 2xl:h-85vh h-75vh
			max-w-100vw relative flex top-36 px-6 lg:px-36 z-1'>
				{/* Left column with text */}
				<div className='top-28 lg:top-20vh relative w-full lg:w-1/2 sm:text-sm md:text-base lg:text-lg
				xl:text-xl'>
					<div className="flex flex-col">
						<h3 className='text-zircon-50 lg:pb-4 pb-1 mb-0
						2xl:top-24 lg:top-16 relative'>OUR MISSION</h3>
						<h2 className='text-zircon-50 slogan 2xl:top-24 lg:top-16 relative leading-12'>
							We support education for all.</h2>
						<p className='absolute mr-5% lg:top-80 top-60 text-white'>
							At StudyCrew, we’re on a mission to transform education.
							We want make education more accessible, collaborative, and engaging
							through innovative learning platforms. We’re dedicated to support students
							in their journey and empower them to explore their passions together. Our
							vision is to provide every student with the resources and community they
							need to reach their full potential.
						</p>
					</div>
				</div>

				{/* Right column with logos */}
				<div className='relative w-full lg:w-1/2 items-center hidden lg:flex'>
					<Image alt="Mission Logos" src={LogoGroup}
						width={500} height={500} />
				</div>
			</div>

		</div>
	)
}

export default Mission
