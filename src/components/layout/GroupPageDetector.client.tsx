'use client'

import { usePathname } from 'next/navigation'

const GroupPageDetector: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const pathname = usePathname()
  const isGroupPage = pathname.startsWith('/groups/')

  return <>{isGroupPage ? children : null}</>
}

export default GroupPageDetector
