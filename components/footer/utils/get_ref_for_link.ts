import { type MutableRefObject } from 'react'

import { FooterLink } from '../types'

interface GetRefForLinkRefArgs {
  missionRef: MutableRefObject<null>
  featuresRef: MutableRefObject<null>
  projectRef: MutableRefObject<null>
  teamRef: MutableRefObject<null>
  signupRef: MutableRefObject<null>
  faqRef: MutableRefObject<null>
}

const getRefForLink = (
  refs: GetRefForLinkRefArgs,
  link: FooterLink
): MutableRefObject<null> | null => {
  const { missionRef, featuresRef, projectRef, teamRef, signupRef, faqRef } =
    refs

  switch (link) {
    case FooterLink.Mission:
      return missionRef

    case FooterLink.Features:
      return featuresRef

    case FooterLink.Project:
      return projectRef

    case FooterLink.Team:
      return teamRef

    case FooterLink.SignUp:
      return signupRef

    case FooterLink.FAQ:
      return faqRef

    default:
      return null
  }
}

export default getRefForLink
