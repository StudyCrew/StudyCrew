import _split from 'lodash/split'
import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const convertBase64ToFile = (base64String: string): File => {
  const imageData = _split(base64String, ',')[1]
  const binaryImageData = atob(imageData)
  const uint8Array = new Uint8Array(binaryImageData.length)

  for (let i = 0; i < binaryImageData.length; i++) {
    uint8Array[i] = binaryImageData.charCodeAt(i)
  }

  const blob = new Blob([uint8Array], { type: 'image/jpeg' })

  return new File([blob], 'image.jpg', { type: 'image/jpeg' })
}

export function shortenName(fullName: string): string {
  const nameParts = fullName.split(' ')

  const initials = nameParts.map((part) => part.charAt(0))

  return initials.join('').toLowerCase()
}

export function formatDate(date: Date): string {
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${month}/${day}/${year}`;
}