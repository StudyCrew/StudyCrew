import { type ClassValue } from 'clsx'
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
