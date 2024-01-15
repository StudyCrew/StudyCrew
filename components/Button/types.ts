import { type ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'outline' | 'primary'
  size?: 'big' | 'small' | 'big-outline'
  onClick?: () => void
}
