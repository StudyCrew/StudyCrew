import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import Logout from '../Logout'

import { type TopbarProps } from './types'
import { CLASS_NAME } from './const'

const Topbar: React.FC<TopbarProps> = (props: TopbarProps): JSX.Element => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <nav
      className={classNames(
        finalClassName,
        'fixed top-0 z-30 flex',
        'w-full items-center justify-between px-6 py-3'
      )}
    >
      <Link href="/" className="flex items-center gap-4">
        <p className="text-2xl leading-6 font-bold text-light-1 max-xs:hidden">
          StudyCrew
        </p>
      </Link>
      <Logout placement="top" />
    </nav>
  )
}

export default Topbar
