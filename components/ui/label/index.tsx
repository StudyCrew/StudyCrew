'use client'

import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { labelVariants } from '@/lib/variance/label'

// prettier-ignore
const LabelRef = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>>

const Label = LabelRef((props, ref) => {
  const { className, ...otherProps } = props

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...otherProps}
    />
  )
})

Label.displayName = LabelPrimitive.Root.displayName

export default Label
