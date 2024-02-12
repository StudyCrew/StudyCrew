import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/variance/button'

import { type ButtonProps } from './types'

const ButtonRef = React.forwardRef<HTMLButtonElement, ButtonProps>

const Button: React.FC<ButtonProps> = ButtonRef(
  (props: ButtonProps): JSX.Element => {
    const {
      className,
      text,
      variant,
      size,
      asChild = false,
      ...otherProps
    } = props

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        {...otherProps}
      >
        {text}
      </Comp>
    )
  }
)
Button.displayName = 'Button'
export default Button
export { buttonVariants }
