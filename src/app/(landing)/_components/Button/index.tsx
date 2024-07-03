import React from 'react'

import { CLASS_NAME } from './const'
import { type ButtonProps } from './types'

import './style.css'

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { onClick, variant = 'primary', size, children } = props

  let className = CLASS_NAME

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
