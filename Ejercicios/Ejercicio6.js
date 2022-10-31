import connect from "./Database.js"
import Restaurant from "../api/models/Restaurant.js"

connect()

const run = async() => {
    const six = await Restaurant.find({cuisine: {$ne: 'American '}, 'grades.score': {$gt: 70}})
    console.log(six)
}

run ()