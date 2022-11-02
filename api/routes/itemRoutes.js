import express  from "express"
import * as itemController from "../controllers/itemController.js"

const router = express.Router()

router.route('/items').post(itemController.create)


export default router

