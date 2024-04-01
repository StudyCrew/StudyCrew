import { cn } from '@/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  className?: string
}

const Checkbox = React.forwardRef<
React.ElementRef<typeof CheckboxPrimitive.Root>,
CheckboxProps
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary-400 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-400 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-primary-400',
        className
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
