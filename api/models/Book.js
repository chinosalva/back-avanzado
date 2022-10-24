import mongoose from 'mongoose'



const bookSchema = new mongoose.Schema({
    title: String,
    editorial: String,
    edition: String,
    pagenumber: String,
    isbn: String,
})

export default mongoose.model('Book', bookSchema)