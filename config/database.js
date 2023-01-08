import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

// This connects the database with mongoose
mongoose.connect(process.env.DATABASE_URL)