import { MongoClient, MongoClientOptions } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGO_URI) {
  throw new Error('Unable to find a valid Mongo URI')
}
const mongoClient = new MongoClient(process.env.MONGO_URI)

export default mongoClient
