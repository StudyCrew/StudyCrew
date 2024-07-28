'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'

// TODO: Refactor this after defining types! The userGroups' type should be defined in a separate file and used here.
const Navbar = ({
  userId,
  userGroups
}: {
  userId: string
  userGroups: {
    id: string
    name: string
    admin_id: string
    description: string
    subject: string
    member_ids: string[]
    bannerimage: string
  }[]
}) => {
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
    },
  ]

  const footerLinks = [
    {
      imgURL: '/assets/icons/user.svg',
      route: `/profile/${userId}`,
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
        'sticky left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-200 bg-white text-white w-[78px]'
      }
    >
      <nav
        className={
          'flex flex-col justify-between h-screen border-r-[1px] border-gray-300'
        }
      >
        {/* LOGO */}
        <div
          className={'flex justify-center items-center h-[190px] bg-[#F2F7FF] '}
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

        {/* NAVIGATION LINKS */}
        <div className={'flex flex-col py-[39px] h-full gap-y-2'}>
          {navLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`)

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex justify-start items-center h-14 cursor-pointer ',
                  {
                    // 'bg-[#D3E4FF] border-l-[8px] border-blue-500 rounded-l':
                    'bg-[#D3E4FF]':
                      isActive
                  }
                )}
              >
                {isActive && (
                  <div className={"w-2 bg-blue-500 rounded-l rounded-full h-full"}>
                    &nbsp;
                  </div>
                )}
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  height={24}
                  width={24}
                  className={cn("ml-6", { 'fill-blue-600 ml-4': isActive })}
                />
              </Link>
            )
          })}

          {/* USER GROUPS */}
          <div className={'flex flex-col gap-y-2'}>
            {userGroups?.map((group) => {
              const initials = group.name
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0].toUpperCase())
                .join('')

              const isActive =
                pathname === `/groups/${group.id}` || pathname.startsWith(`/groups/${group.id}`)
              return (
                <Link
                  href={`/groups/${group.id}`}
                  key={group.id}
                  className={cn(
                    'flex justify-start items-center h-14 cursor-pointer',
                    {
                      'bg-[#D3E4FF]':
                        pathname === `/group/${group.id}`
                    }
                  )}
                >
                  {isActive && (
                    <div className={"w-2 bg-blue-500 rounded-l rounded-full h-full"}>
                      &nbsp;
                    </div>
                  )}
                  <div className={cn("flex justify-center border-[1px] border-blue-600 items-center w-8 h-8 bg-blue-50 rounded-full ml-5", {"ml-3": isActive})}>
                    <span className={cn("text-black text-base")}>{initials}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* FOOTER */}
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
                  'flex justify-start items-center h-14 cursor-pointer ',
                  {
                    // 'bg-[#D3E4FF] border-l-[8px] border-blue-500 rounded-l':
                    'bg-[#D3E4FF]':
                      isActive
                  }
                )}
              >
                {isActive && (
                  <div className={"w-2 bg-blue-500 rounded-l rounded-full h-full"}>
                    &nbsp;
                  </div>
                )}
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  height={24}
                  width={24}
                  className={cn("ml-6", {"ml-4": isActive })}
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