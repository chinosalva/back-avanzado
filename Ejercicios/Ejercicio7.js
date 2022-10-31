import connect from "./Database.js"
import Restaurant from "../api/models/Restaurant.js"

connect()

const run = async() => {
    const seven = await Restaurant.find(
        {
            $or: 
        [  
            {
                borough: 'Staten Island',
            },
            {
                borough: 'Bronx Brooklin',
            },
        ],
        }, 
        {
        name: 1,
        borough: 1,
        })

    console.log(seven)
}

run()