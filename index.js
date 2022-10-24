import mongoose from "mongoose"
import dotenv from "dotenv"
import User from './api/models/User.js'
import Book from './api/models/Book.js'

dotenv.config()

mongoose.connect(process.env.DB_URI, async() => {
    console.log("Conexion a base de datos satisfactoria")

    /*
        CRUD con mongoose
    */

    const user = await User.create({
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

    console.log(user)

    const users = await User.find({
            name: 'Juan',
        })

        console.log(users)
    
    
        const update = await User.updateMany(
            {
                name: 'Juan',
                lastname: 'Rodriguez',
            },
            {
                role: 'Admin',
            }
        )
    
            console.log(update)


        const deleteOne = await User.deleteOne({
            name: 'Juan',
        })

        console.log(deleteOne)


    const book = await Book.create ({
        title: 'El rey del cash',
        editorial: 'Leonidas',
        edition: '91',
        pagenumber: '300',
        isbn: 'No se que sea esto',
    })

        console.log(book)

    const find = await Book.find({
        name: 'El rey del cash',
    })

        console.log(find)

    const updateBook = await Book.updateMany(
        {
            name: 'El rey del cash',
        },
        {
            editorial: 'Marvel',
        }
    )

    console.log(updateBook)

    const deleteBook = await Book.deleteOne({
        name: 'El rey del cash',
    })

    console.log(deleteBook)

})