import React from 'react'
import { privacyPolicyContent } from './content'

export default function Page(): JSX.Element {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
    </div>
  )
}
