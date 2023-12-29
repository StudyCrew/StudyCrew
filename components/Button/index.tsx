import React from 'react'
import classNames from 'classnames'

import { CLASS_NAME } from './const'
import { type ButtonProps, ButtonVarient } from './types'

import './style.css'

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const {
		className, children, variant = ButtonVarient.Primary, size, onClick
	} = props

	const finalClassName = classNames(CLASS_NAME, className, {
		[`${CLASS_NAME}-outline`]: variant === 'outline',
		[`${CLASS_NAME}-big`]: size === 'big',
		[`${CLASS_NAME}-small`]: size === 'small',
		[`${CLASS_NAME}-big-outline`]: size === 'big-outline'
	})

	return (
		<button className={finalClassName} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
