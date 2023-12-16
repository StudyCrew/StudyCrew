import mongoose from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
export interface IWaitlist {
	email: string
}
interface WaitlistClass {
	email: string
}
const waitlistSchema = new mongoose.Schema<WaitlistClass>({
	email: {
		type: String,
		required: true,
		unique: true
	}
})

const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema)

export default Waitlist
