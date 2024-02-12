import { type ChangeEvent } from 'react'

import { type InputProps } from '../input/types'

export interface FileInputProps extends InputProps {
  label: string
  cb: (event: ChangeEvent<HTMLInputElement>) => void
}
