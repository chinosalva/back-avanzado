import mongoose from "mongoose"
import dotenv from "dotenv"
import User from './api/models/User.js'

dotenv.config()

mongoose.connect(process.env.DB_URI, async() => {
    console.log("Conexion a base de datos satisfactoria")

    /*
        CRUD con mongoose
    */

    // const user = await User.create({
    //     address: 'Direcion prueba',
    //     birthday: new Date(),
    //     contacts: ['Pedrito', 'Jorge'],
    //     email: 'chinito@gmail.com',
    //     lastname: 'Rodriguez',
    //     name: 'Juan',
    //     password: '123',
    //     phonenumber: '5627572781',
    //     role: 'Client',
    // })

    // console.log(user)

    // const users = await User.find({
    //         name: 'Juan',
    //     })

    //     console.log(users)
    
    
        // const update = await User.updateMany(
        //     {
        //         name: 'Juan',
        //         lastname: 'Rodriguez',
        //     },
        //     {
        //         role: 'Admin',
        //     }
        // )
    
        //     console.log(update)


        const deleteOne = await User.deleteOne({
            name: 'Juan',
        })

        console.log(deleteOne)
})