import { type ChangeEvent } from 'react'
import { type InputProps } from './input'

export interface FileInputProps extends InputProps {
  cb: (event: ChangeEvent<HTMLInputElement>) => void
}
