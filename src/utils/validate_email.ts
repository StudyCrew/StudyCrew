import _isNull from 'lodash/isNull'
import _isEmpty from 'lodash/isEmpty'

import { EMAIL_REGEX } from '@/const'

/**
 * Validates the email, returning an error message if it is invalid, or null.
 *
 * @param {string} email - The email to validate
 * @returns {string} - The error message
 */
export const validateEmail = (email: string): string | null => {
  if (_isNull(email)) {
    return 'Please enter an email address.'
  } else if (_isEmpty(email)) {
    return 'The provided email is empty.'
  } else if (!EMAIL_REGEX.test(email)) {
    return 'The provided email is invalid.'
  }

  return null
}
