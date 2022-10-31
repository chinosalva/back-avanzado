import connect from "./Database.js"
import Restaurant from "../api/models/Restaurant.js"

connect()

const run = async() => {
    const seven = await Restaurant.find()
}