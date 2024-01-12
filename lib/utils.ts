import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
export const convertBase64ToFile = (base64String: string): File => {
  // Extract the base64 data
  const imageData = base64String.split(',')[1] // Remove "data:image/jpeg;base64," part
  // Convert base64 to binary
  const binaryImageData = atob(imageData)
  // Create a Uint8Array from the binary data
  const uint8Array = new Uint8Array(binaryImageData.length)
  for (let i = 0; i < binaryImageData.length; i++) {
    uint8Array[i] = binaryImageData.charCodeAt(i)
  }
  // Create a Blob from the Uint8Array
  const blob = new Blob([uint8Array], { type: 'image/jpeg' })
  // Create a File object from the Blob
  return new File([blob], 'image.jpg', { type: 'image/jpeg' })
}
