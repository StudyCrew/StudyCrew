'use client'

import React from 'react'
import Link from 'next/link'
import Logout from './Logout'

export default function Topbar(): JSX.Element {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <p className="text-2xl leading-6 font-bold text-light-1 max-xs:hidden">
          StudyCrew
        </p>
      </Link>
      <Logout placement="top" />
    </nav>
  )
}
