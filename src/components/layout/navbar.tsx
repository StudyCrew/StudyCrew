'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    {
      imgURL: '/assets/icons/house.svg',
      route: '/dashboard',
      label: 'Dashboard'
    },
    {
      imgURL: '/assets/icons/users.svg',
      route: '/groups',
      label: 'Search Study Groups'
    }
  ]

  const footerLinks = [
    {
      imgURL: '/assets/icons/user.svg',
      route: '/profile/{id}', // ! doubt
      label: 'Profile'
    },
    {
      imgURL: '/assets/icons/gear.svg',
      route: '/settings',
      label: 'Settings'
    }
  ]

  return (
    <div
      className={
        'sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-200 bg-white text-white w-[72px]'
      }
    >
      <nav
        className={
          'flex flex-col justify-between h-screen border-r-[1px] border-gray-300'
        }
      >
        <div
          className={'flex justify-center items-center h-[113px] bg-[#F2F7FF]'}
        >
          <Link href={'/'} className={'cursor-pointer'}>
            <Image
              src={'/assets/Logo.svg'}
              alt={'StudyCrew Logo'}
              className={'size-[40px]'}
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className={'flex flex-col h-full pt-[39px] gap-y-2'}>
          {navLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`)

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex justify-center items-center h-[56px] cursor-pointer ',
                  {
                    'bg-[#D3E4FF] border-l-[8px] border-blue-500 rounded-l':
                      isActive
                  }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  height={24}
                  width={24}
                  className={cn({ 'fill-blue-600': isActive })}
                />
              </Link>
            )
          })}
          {}
        </div>
        <div
          className={
            'flex flex-col-reverse justify-between h-[144px] pb-[32px] pt-4 gap-y-4 border-t-[1px] border-gray-300  bg-gray-50'
          }
        >
          {footerLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`)

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex justify-center items-center h-[56px] cursor-pointer ',
                  { 'bg-[#D3E4FF] border-l-[8px] border-blue-500': isActive }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  height={24}
                  width={24}
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
