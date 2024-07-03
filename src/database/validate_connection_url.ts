import _isEmpty from 'lodash/isEmpty'

import { MONGODB_CONNECTION_URL_REGEX } from '@/const'

const validateMongoDBConnectionURL = (url: string): Error | null => {
  if (_isEmpty(url)) {
    return new Error('The MONGODB_URL environment variable is required')
  } else if (!MONGODB_CONNECTION_URL_REGEX.test(url)) {
    return new Error('The MONGODB_URL environment variable is invalid')
  }

  return null
}

export default validateMongoDBConnectionURL
export { validateMongoDBConnectionURL }
