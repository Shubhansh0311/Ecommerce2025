import express from  "express"
import authenticate from "../middleware/middleware.js"
import productController from "../controller/product.controller.js"

const productRouter = express.Router()

productRouter.get('/',authenticate,productController.getAllProduct)
productRouter.get('/id/:productId',authenticate,productController.findProductsById)

export default {productRouter}