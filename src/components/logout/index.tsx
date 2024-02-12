import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

import { type LogoutProps } from './types'
import { CLASS_NAME } from './const'

const Logout: React.FC<LogoutProps> = (props: LogoutProps): JSX.Element => {
  const { className, placement } = props

  const router = useRouter()
  const finalClassName = classNames(CLASS_NAME, className)
  const onSignOut = useCallback(() => {
    router.push('/sign-in')
  }, [router])

  return (
    <div className={finalClassName}>
      <SignedIn>
        <SignOutButton signOutCallback={onSignOut}>
          <div
            className={`flex cursor-pointer gap-4 ${
              placement === 'top' && 'lg:hidden'
            }`}
          >
            <p className="text-light-2 max-lg:hidden">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default Logout
