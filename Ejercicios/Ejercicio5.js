import connect from "./Database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

const run = async() => {
    const five = await Restaurant.find({ 'grades.score': {
        $gte: 90
    },
    })
    console.log(five)
}

run ()