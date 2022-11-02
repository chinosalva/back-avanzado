import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    stock: Number,
})

export default mongoose.model('Item', ItemSchema)