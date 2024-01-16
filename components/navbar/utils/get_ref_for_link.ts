import { type MutableRefObject } from 'react'

import { NavbarLink } from '../types'

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
  link: NavbarLink
): MutableRefObject<null> | null => {
  const { missionRef, featuresRef, projectRef, teamRef, signupRef, faqRef } =
    refs

  switch (link) {
    case NavbarLink.Mission:
      return missionRef

    case NavbarLink.Features:
      return featuresRef

    case NavbarLink.Project:
      return projectRef

    case NavbarLink.Team:
      return teamRef

    case NavbarLink.SignUp:
      return signupRef

    case NavbarLink.FAQ:
      return faqRef

    default:
      return null
  }
}

export default getRefForLink
