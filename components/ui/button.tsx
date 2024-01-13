import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonProps } from '@/lib/interface/controls/button'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/variance/button'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.text}
      </Comp>
    )
  }
)
Button.displayName = 'Button'
export default Button
export { buttonVariants }
