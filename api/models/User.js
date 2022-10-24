import mongoose from 'mongoose'

/*
    Schema (Molde)
    Nombre (String)
*/ 

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    birthday: Date,
    address: String,
    role: String,
    phonenumber: String,
    contacts: [String],
    email: String,
    password: String,
})

export default mongoose.model('User', userSchema)