'use client'

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'

const HeaderNotification: React.FC = () => {
  const supabase = createClient()
  const [readAll, setReadAll] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const { data } = await supabase.from('notifications').select('*')

      const unread = data?.filter((noti: any) => !noti.read)
      if (unread?.length === 0) {
        setReadAll(true)
      } else {
        setReadAll(false)
      }
    }

    fetchData()
  }, [supabase])

  return (
    <Link href={'#'}>
      <Image
        src={
          readAll
            ? '/assets/icons/noti-read.svg'
            : '/assets/icons/noti-unread.svg'
        }
        height={30}
        width={30}
        alt={'notification icon'}
      />
    </Link>
  )
}

export default HeaderNotification
