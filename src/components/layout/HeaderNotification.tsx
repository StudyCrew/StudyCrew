'use client'

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'
import { Bell } from '@phosphor-icons/react'

const HeaderNotification: React.FC = () => {
  const supabase = createClient()
  const [isRead, setIsRead] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const { data } = await supabase.from('notifications').select('*')

      const unread = data?.filter((noti: any) => !noti.read)
      if (unread?.length === 0) {
        setIsRead(true)
      } else {
        setIsRead(false)
      }
    }

    fetchData()
  }, [supabase])

  return (
    <Link href={'#'} className="relative">
      <Bell color="#2353A0" weight="duotone" size={30} />
      {!isRead && (
        <div className="absolute top-0 right-0 h-3 w-3 bg-red-600 rounded-full"></div>
      )}
    </Link>
  )
}

export default HeaderNotification
