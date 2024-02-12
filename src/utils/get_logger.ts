import { type Diary, diary } from 'diary'

import MANIFEST from '@/../package.json'

const { name: packageName } = MANIFEST

export const getLogger = (scope: string): Diary =>
  diary(`${packageName}:${scope}`)
