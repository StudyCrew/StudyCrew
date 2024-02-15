import mongoose from 'mongoose'

import { validateMongoDBConnectionURL } from './validate_connection_url'

// Configures mongoose to omit unknown fields in queries.
// See https://mongoosejs.com/docs/guide.html#strictQuery for more information
mongoose.set('strictQuery', true)

const { NODE_ENV, MONGODB_URL = '' } = process.env

let isConnected = false
let isConnecting = false

export const connectToDB = async (): Promise<void> => {
  if (isConnecting) {
    throw new Error('MongoDB connection is already in progress...')
  } else if (isConnected) {
    throw new Error('A connection to MongoDB has already been established')
  }

  const connectionURLValidationError = validateMongoDBConnectionURL(MONGODB_URL)

  if (connectionURLValidationError !== null) {
    throw connectionURLValidationError
  }

  isConnecting = true

  try {
    await mongoose.connect(MONGODB_URL ?? '')
    isConnected = true
  } catch (err: any) {
    if (NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error((err as Error).stack)
    } else {
      // eslint-disable-next-line no-console
      console.error((err as Error).message)
    }
  }

  isConnecting = false
}
