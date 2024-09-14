'use client'

import React from 'react'
import Image from 'next/image'
import GoogleAccount from 'public/assets/web_light_sq_ctn 1.svg'
import { signInWithGoogle } from '@/utils/oauth/signInWithOauth'

export function GoogleOauthButton(): React.ReactElement {
  return (
    <Image
      src={GoogleAccount}
      alt="Google Account"
      className="w-[234px] h-[50px] cursor-pointer mt-8"
      onClick={signInWithGoogle}
    />
  )
}
