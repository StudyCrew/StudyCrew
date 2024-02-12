import React from 'react'
import { Input } from './input'

import { type FileInputProps } from './types'

const FileInputRef = React.forwardRef<HTMLInputElement, FileInputProps>

const FileInput = FileInputRef((props: FileInputProps) => {
  const { label, cb } = props

  return <Input type="file" label={label} onChange={cb} />
})

FileInput.displayName = 'FileInput'

export default FileInput
