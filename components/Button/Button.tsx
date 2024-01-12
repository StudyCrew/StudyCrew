import React from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'outline' | 'primary'
  size?: 'big' | 'small' | 'big-outline'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size,
  onClick
}) => {
  let className = 'button'

  if (variant === 'outline') className += ' button-outline'
  if (size === 'big') className += ' button-big'
  if (size === 'small') className += ' button-small'
  if (size === 'big-outline') className += ' button-big-outline'

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
