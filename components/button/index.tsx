import React from 'react'
import classNames from 'classnames'

import { CLASS_NAME } from './const'
import { ButtonVariant, ButtonSize, type ButtonProps } from './types'

import './style.scss'

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    size,
    onClick,
    children,
    className,
    variant = ButtonVariant.Primary
  } = props

  const finalClassName = classNames(CLASS_NAME, className, {
    outline: variant === ButtonVariant.Outline,
    big: size === ButtonSize.Big,
    small: size === ButtonSize.Small,
    'big-outline': size === ButtonSize.BigOutline
  })

  return (
    <button className={finalClassName} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
export { ButtonVariant, ButtonSize }
