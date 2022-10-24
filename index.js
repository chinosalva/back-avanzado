import mongoose from "mongoose"
import dotenv from "dotenv"
import User from './api/models/User.js'

dotenv.config()

mongoose.connect(process.env.DB_URI, () => {
    console.log("Conexion a base de datos satisfactoria")

    /*
        CRUD con mongoose
    */

    User.create({
        address: 'Direcion prueba',
        birthday: new Date(),
        contacts: ['Pedrito', 'Jorge'],
        email: 'chinito@gmail.com',
        lastname: 'Rodriguez',
        name: 'Juan',
        password: '123',
        phonenumber: '5627572781',
        role: 'Client',
    })

    //User.find({
        //     name: 'Juan',
        // })
    
    
        // User.updateMany(
        //     {
        //         name: 'Juan',
        //         lastname: 'Rodriguez',
        //     },
        //     {
        //         role: 'Admin',
        //     }
        // )
    
        // User.deleteOne({
        //     name: 'Juan',
        // })
})