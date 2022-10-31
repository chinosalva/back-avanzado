import connect from "./Database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

const run = async() => {
    const tres= await Restaurant.find({borough: 'Bronx'}).limit(5)
    console.log(tres)
}

run ()