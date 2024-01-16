import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import LogoGroup from '../../public/assets/mission/LogoGroup.svg'

import { type MissionProps } from './types'
import { CLASS_NAME } from './const'

import './style.scss'

const Mission: React.FC<MissionProps> = (props: MissionProps): JSX.Element => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <div className={finalClassName}>
      <svg
        fill="none"
        viewBox="0 0 2628 376"
        style={{ width: '100%' }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${CLASS_NAME}-chevron-gradient`}
        {...props}
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2628 376"
        fill="none"
        style={{ width: '100%' }}
        className={`${CLASS_NAME}-chevron-white`}
        preserveAspectRatio="none"
        {...props}
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
        fill="none"
        viewBox="0 0 2628 376"
        style={{ width: '100%' }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${CLASS_NAME}-second-chevron-gradient`}
        {...props}
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

      <div
        className={classNames(
          'bg-gradient-to-r from-primary-500',
          'to-gradient-500 2xl:h-85vh h-75vh max-w-100vw relative flex top-36',
          'px-6 lg:px-36 z-1'
        )}
      >
        <div
          className={classNames(
            'top-28 lg:top-20vh relative w-full',
            'lg:w-1/2 sm:text-sm md:text-base lg:text-lg xl:text-xl'
          )}
        >
          <div className="flex flex-col">
            <h3
              className={classNames(
                'text-zircon-50 lg:pb-4 pb-1 mb-0',
                '2xl:top-24 lg:top-16 relative'
              )}
            >
              OUR MISSION
            </h3>

            <h2
              className={classNames(
                'text-zircon-50 slogan 2xl:top-24',
                'lg:top-16 relative leading-12'
              )}
            >
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

        <div className="relative w-full lg:w-1/2 items-center hidden lg:flex">
          <Image alt="Mission Logos" src={LogoGroup} width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default Mission
