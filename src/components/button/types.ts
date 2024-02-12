import { type ReactNode } from 'react'

export enum ButtonVariant {
  Primary = 'primary',
  Outline = 'outline'
}

export enum ButtonSize {
  Big = 'big',
  Small = 'small',
  BigOutline = 'big-outline'
}

export interface ButtonProps {
  children: ReactNode
  className?: string
  size?: ButtonSize
  onClick?: () => void
  variant?: ButtonVariant
}
