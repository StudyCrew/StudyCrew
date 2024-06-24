import * as React from 'react'
import { type InputProps } from '@/types/controls/input'

import { cn } from '@/utils'
import Label from '@/components/ui/label'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <Label htmlFor={props.label}>{props.label}</Label>
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm 
          ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed
          disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950
          dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300`,
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)
Input.displayName = 'Input'

export { Input }
