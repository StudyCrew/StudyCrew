import React from 'react'
import classNames from 'classnames'

import Label from '../label'

import { type TextareaProps } from './types'

const TextareaRef = React.forwardRef<HTMLTextAreaElement, TextareaProps>

const Textarea = TextareaRef((props: TextareaProps, ref) => {
  const { label, className, ...otherProps } = props

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <textarea
        ref={ref}
        className={classNames(
          className,
          'flex min-h-[80px] w-full rounded-md border',
          'border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white',
          'placeholder:text-slate-500 focus-visible:outline-none',
          'focus-visible:ring-2 focus-visible:ring-slate-95',
          'focus-visible:ring-offset-2 disabled:cursor-not-allowed',
          'disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950',
          'dark:ring-offset-slate-950 dark:placeholder:text-slate-400',
          'dark:focus-visible:ring-slate-300'
        )}
        {...otherProps}
      />
    </>
  )
})
Textarea.displayName = 'Textarea'

export default Textarea
