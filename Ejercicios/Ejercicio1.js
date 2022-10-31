import connect from "./Database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

const run = async() => {
    const restaurants = await Restaurant.find()
    console.log(restaurants)
}

run()