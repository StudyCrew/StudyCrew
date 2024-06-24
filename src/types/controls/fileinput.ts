import { type ChangeEvent } from 'react'
import { type InputProps } from '@/types/controls/input'

export interface FileInputProps extends InputProps {
  cb: (event: ChangeEvent<HTMLInputElement>) => void
}
