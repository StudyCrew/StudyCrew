'use client'

import React, { useState, useEffect } from 'react'
import { Bell, CircleNotch } from '@phosphor-icons/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { getNotificationsAction } from '@/utils/actions/notifications.action'
import NotificationCard from '@/components/widgets/notifications/NotificationCard'

interface Notification {
  id: string
  category: 'PlatformUpdate' | 'GrpQuestion' | 'GrpMaterial'
  content: string
  title: string
  read: boolean
}

export default function NotificationPopup(): React.ReactElement {
  const [loading, setLoading] = useState(false)

  const [notifications, setNotifications] = useState<Notification[]>([])

  console.log(notifications)

  useEffect(() => {
    async function getNotifications() {
      try {
        setLoading(true)
        const response = await getNotificationsAction()
        setNotifications(response)
      } catch (error) {
        console.error('Error fetching notifications:', error)
      } finally {
        setLoading(false)
      }
    }

    getNotifications()
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className={'relative'}>
          <Bell size={20} weight={'duotone'} color={'#3B82F6'} />
          <span className="absolute top-0 left-0 block h-2 w-2 rounded-full bg-red-500" />
          <span className="sr-only">Toggle notifications</span>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto h-[30vh] overflow-y-scroll bg-gray-200"
        align={'end'}
      >
        <div className="grid gap-4">
          <div className="space-y-4">
            <h4 className="font-bold text-xl leading-none">Notifications</h4>
            {loading ? (
              <div className={'flex justify-center items-center'}>
                <CircleNotch
                  size={32}
                  weight={'duotone'}
                  color={'#3B82F6'}
                  className={'animate-spin'}
                />
              </div>
            ) : notifications.length ? (
              notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  variant={notification.category}
                  variant1Data={
                    notification.category === 'PlatformUpdate'
                      ? {
                          size: 'small',
                          title: notification.title,
                          content: notification.content
                        }
                      : undefined
                  }
                />
              ))
            ) : (
              <div>No new notifications</div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
