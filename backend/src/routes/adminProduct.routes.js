import express from "express"
import authenticate from "../middleware/middleware.js"
import productController from "../controller/product.controller.js"
const adminProductRouter= express.Router()

adminProductRouter.post('/',authenticate,productController.createProducts)
adminProductRouter.post('/creates',authenticate,productController.createMultipleProduct)
adminProductRouter.put('/:id',authenticate,productController.updateProduct)
adminProductRouter.delete('/:id',authenticate,productController.deleteProduct)

export default {adminProductRouter}
