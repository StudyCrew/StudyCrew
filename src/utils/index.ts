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

  return initials.join('').toUpperCase()
}

export function formatDate(date: Date): string {
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${month}/${day}/${year}`
}

export const getURL = (path: string = ''): string => {
  // Check if NEXT_PUBLIC_SITE_URL is set and non-empty. Set this to your site URL in production env.
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ''
      ? process.env.NEXT_PUBLIC_SITE_URL
      : // If not set, check for NEXT_PUBLIC_VERCEL_URL, which is automatically set by Vercel.
        process?.env?.NEXT_PUBLIC_VERCEL_URL &&
          process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ''
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : // If neither is set, default to localhost for local development.
          'http://localhost:3000/'

  // Trim the URL and remove trailing slash if exists.
  url = url.replace(/\/+$/, '')
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Ensure path starts without a slash to avoid double slashes in the final URL.
  path = path.replace(/^\/+/, '')

  // Concatenate the URL and the path.
  return path ? `${url}/${path}` : url
}
