import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) {
    console.log('Missing MongoDB URL')
    return
  }

  if (isConnected) {
    console.log('MongoDB connection already established')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL ?? '')

    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
