'use client'

import { SectionProvider } from './SectionContext'
import Header from './Header'

export default function HeaderWrapper() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <SectionProvider>
        <Header />
      </SectionProvider>
    </div>
  )
}
