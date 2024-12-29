import React from 'react';
import { type ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { onClick, variant = 'primary', size, children } = props;

  // Define Tailwind classes based on props
  const baseClassName =
    'rounded-md font-semibold transition-all duration-200 ease-in-out';
  const variantClassName =
    variant === 'outline'
      ? 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-100'
      : 'bg-primary-500 text-white hover:bg-primary-700';
  const sizeClassName =
    size === 'big'
      ? 'text-lg py-2 px-5'
      : size === 'small'
      ? 'text-sm py-2 px-4'
      : 'text-base py-2.5 px-5';

  const className = `${baseClassName} ${variantClassName} ${sizeClassName}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;