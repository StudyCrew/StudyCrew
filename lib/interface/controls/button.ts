import { type buttonVariants } from '@/lib/variance/button'
import { type VariantProps } from 'class-variance-authority'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  text: string
}
