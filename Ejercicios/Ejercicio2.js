import connect from "./Database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

const run = async() => {
    const two = await Restaurant.find({}, {
        _id: 1, name: 1, cuisine: 1, restaurant_id: 1, borough: 1
    })
    console.log(two)
}

run ()