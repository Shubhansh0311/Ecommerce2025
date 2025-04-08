import express from "express"
import authenticate from "../middleware/middleware.js"
import cartItemController from "../controller/cartItem.controller.js"
const cartItemRouter =express.Router()
cartItemRouter.put('/:cartId',authenticate ,cartItemController.updateCartItem )
cartItemRouter.delete('/:cartId',authenticate ,cartItemController.removeCartItem )
export default {cartItemRouter}