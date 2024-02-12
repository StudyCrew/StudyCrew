import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const convertBase64ToFile = (base64String: string): File => {
  const imageData = base64String.split(',')[1] // Remove "data:image/jpeg;base64," part
  const binaryImageData = atob(imageData)
  const uint8Array = new Uint8Array(binaryImageData.length)

  for (let i = 0; i < binaryImageData.length; i++) {
    uint8Array[i] = binaryImageData.charCodeAt(i)
  }

  const blob = new Blob([uint8Array], { type: 'image/jpeg' })

  return new File([blob], 'image.jpg', { type: 'image/jpeg' })
}
