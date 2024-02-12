import _isEmpty from 'lodash/isEmpty'

import { type MimeType } from '@/types'

/**
 * Converts a base64 string to a File object.
 *
 * @todo: Add and use custom Error classes.
 *
 * @param base64String The base64 string to convert.
 * @param fileName The name of the file.
 * @param mimeType The MIME type of the file.
 * @returns A File object representing the converted base64 data.
 * @throws {Error} When either the fileName or mimeType is empty.
 */
export const convertBase64ToFile = (
  base64String: string,
  fileName: string,
  mimeType: MimeType
): File => {
  if (_isEmpty(fileName)) {
    throw new Error('File name is required')
  } else if (_isEmpty(mimeType)) {
    throw new Error('MIME type is required')
  }

  const imageData = base64String.split(',')[1]
  const binaryImageData = atob(imageData)
  const uint8Array = new Uint8Array(binaryImageData.length)

  for (let i = 0; i < binaryImageData.length; i++) {
    uint8Array[i] = binaryImageData.charCodeAt(i)
  }

  const blob = new Blob([uint8Array], { type: mimeType })

  return new File([blob], fileName, { type: mimeType })
}
