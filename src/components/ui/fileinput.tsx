import React, { forwardRef } from 'react'
import { Input } from '@/components/ui/input'
import { type FileInputProps } from '@/interface/controls/fileinput'

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, type, ...props }) => {
    return (
      <Input
        label={props.label}
        type="file"
        onChange={(e) => {
          props.cb(e)
        }}
      />
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
