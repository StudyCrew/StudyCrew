import * as React from 'react'
import { type TextareaProps } from '@/interface/controls/textarea'

import { cn } from '@/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <textarea
          placeholder={props.label}
          className={cn(
            `flex min-h-[80px] w-full rounded-[1px] border border-[#98A2B3] bg-white px-3 py-2
            text-sm ring-offset-white placeholder:text-[#98A2B3] focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800
            dark:bg-[#98A2B3] dark:ring-offset-slate-950 dark:placeholder:text-slate-400
            dark:focus-visible:ring-slate-300`,
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    )
  }
)
Textarea.displayName = 'Textarea'

export default Textarea
