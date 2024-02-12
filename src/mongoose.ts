import mongoose from 'mongoose'
import _isEmpty from 'lodash/isEmpty'

import { MONGODB_URL_REGEX } from '@/const'

mongoose.set('strictQuery', true)

const { MONGODB_URL = '' } = process.env

let isConnected = false
let isConnecting = false

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    console.error('MongoDB connection already established.')
  } else if (isConnecting) {
    console.error('Already connecting to MongoDB...')
  } else if (_isEmpty(MONGODB_URL)) {
    console.error('MONGODB_URL environment variable is not set.')
  } else if (!MONGODB_URL_REGEX.test(MONGODB_URL)) {
    console.error(
      'MONGODB_URL environment variable is not a valid MongoDB URL.'
    )
  } else {
    isConnecting = true

    await mongoose.connect(MONGODB_URL ?? '')

    isConnecting = false
    isConnected = true

    console.log('Connected to MongoDB.')
  }
}
