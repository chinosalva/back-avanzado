import Item from "../models/Item.js"

const create = async(req, res) => {

    try {
        const item = await Item.create(req.body)
    return res.json({
        msg: 'Item creado satisfactoriamente',
        item,
    })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear el item',
            error,
        })
    }
}

const read = () => {

}


const update = () => {

}

const remove = () => {

}

export {create, read, update, remove}