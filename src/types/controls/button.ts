import { type buttonVariants } from '@/components/ui/button'
import { type VariantProps } from 'class-variance-authority'

// prettier-ignore
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  text: string
}
