'use client'

import React, { useState } from 'react'
import { Layout, ChatText, SealQuestion, File } from '@phosphor-icons/react'
import { useRouter, useParams } from 'next/navigation'

interface SidebarOptions {
  label: string
  icon: React.ReactElement
  activeIcon: React.ReactElement
}

const sidebarOptions: SidebarOptions[] = [
  {
    label: 'Overview',
    icon: <Layout size={25} />,
    activeIcon: <Layout size={25} weight="duotone" color="#2353A0" />
  },
  {
    label: 'Q&A',
    icon: <SealQuestion size={25} />,
    activeIcon: <SealQuestion size={25} weight="duotone" color="#2353A0" />
  },
  {
    label: 'Chats',
    icon: <ChatText size={25} />,
    activeIcon: <ChatText size={25} weight="duotone" color="#2353A0" />
  },
  {
    label: 'Materials',
    icon: <File size={25} />,
    activeIcon: <File size={25} weight="duotone" color="#2353A0" />
  }
]

function SecondaryNavbar(): React.ReactElement {
  const router = useRouter()
  const { id } = useParams()

  const [activeIndex, setActiveIndex] = useState(0)

  const BASE_URL = `/groups/${id}`

  function handleSetActive(index: number): void {
    setActiveIndex(index)

    switch (index) {
      case 0:
        router.push(`${BASE_URL}`)
        break
      case 1:
        router.push(`${BASE_URL}/qna`)
        break
      case 2:
        router.push(`${BASE_URL}/chats`)
        break
      case 3:
        router.push(`${BASE_URL}/materials`)
        break
      default:
        break
    }
  }

  return (
    <div className={'h-full bg-white w-52 flex-shrink-0 absolute'}>
      <div
        className={
          'text-center font-semibold text-xl items-center bg-blue-50 h-32 flex justify-center'
        }
      >
        AP Calculus
      </div>
      <div className={'mt-10 space-y-2'}>
        {sidebarOptions.map((option, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={index}
              className={`flex items-center justify-start gap-2 h-[56px] cursor-pointer ${isActive ? 'bg-[#D3E4FF]' : ''}`}
              onClick={() => handleSetActive(index)}
            >
              <div
                className={`w-2 h-[56px] rounded-tr-md rounded-br-md ${isActive ? 'bg-[#3B82F6]' : ''}`}
              />
              <div className={'flex items-center justify-center'}>
                {isActive ? option.activeIcon : option.icon}
              </div>
              <div
                className={`text-center text-lg font-medium ${isActive ? 'text-[#2353A0]' : ''}`}
              >
                {option.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { SecondaryNavbar }
