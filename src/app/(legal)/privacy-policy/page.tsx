import React from 'react'
import { policyContent } from './content'

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="bg-white dark:bg-white pt-4">
      <div dangerouslySetInnerHTML={{ __html: policyContent }} />
    </div>
  )
}
