import { type buttonVariants } from '@/variance/button'
import { type VariantProps } from 'class-variance-authority'

// prettier-ignore
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { // eslint-disable-line
  asChild?: boolean
  text: string
}
