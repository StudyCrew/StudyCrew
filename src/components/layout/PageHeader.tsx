import { cn } from '@/utils'
import React from 'react'
import SearchBar from '@/components/layout/SearchBar'
import HeaderNotification from '@/components/layout/HeaderNotification'

const PageHeader: React.FC = () => {
  return (
    <header className={cn('flex items-center justify-between py-8')}>
      <SearchBar />
      <HeaderNotification />
    </header>
  )
}

export default PageHeader
