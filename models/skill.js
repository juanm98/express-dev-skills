import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  done: Boolean
})

// Compile the Schema into a model and then export it
const Skill = mongoose.model('Skill', skillSchema)

export {
  skill
}