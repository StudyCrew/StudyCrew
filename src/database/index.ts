import mongoose from 'mongoose'

// TODO: Add logger utility function to get rid of direct console.* calls.
// TODO: Add a utility function to log stacktraces in if NODE_ENV is set to
//       'development'.
const { NODE_ENV } = process.env
let isConnected = false

export const connectToDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) {
    // eslint-disable-next-line no-console
    console.log('Missing MongoDB URL')
    return
  }

  if (isConnected) {
    // eslint-disable-next-line no-console
    console.log('MongoDB connection already established')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL ?? '')

    isConnected = true

    // eslint-disable-next-line no-console
    console.log('MongoDB connected')
  } catch (err: any) {
    if (NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log((err as Error).stack)
    } else {
      // eslint-disable-next-line no-console
      console.log((err as Error).message)
    }
  }
}
