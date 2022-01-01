import mongoose, { Schema, model } from 'mongoose'
;(async () => {
   await mongoose.connect('mongodb+srv://methmal:321ajunas@cluster0.6rjmi.mongodb.net/mailing_list?retryWrites=true&w=majority')
})()

const subscriberSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   frequency: {
      type: String,
      enum: ['D' /*DAILY*/, 'W' /*WEEKLY*/, 'M' /*MONTHLY*/, 'A' /*ANNUALLY*/],
      default: 'W',
      required: true,
      unique: false,
   },
})

const Subscriber = model('subscribers', subscriberSchema)
export default Subscriber
