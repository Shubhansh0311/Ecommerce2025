import express from "express"
import authenticate from "../middleware/middleware.js"
import adminController from "../controller/adminOrder.controller.js"
const adminOrderRouter = express.Router()
adminOrderRouter.get('/',authenticate ,adminController.getAllOrders )
adminOrderRouter.put('/:orderId/confirmed',authenticate ,adminController.confirmOrder )
adminOrderRouter.put('/:orderId/cancelled',authenticate ,adminController.cancelOrder )
adminOrderRouter.put('/:orderId/shipped',authenticate ,adminController.shippedOrder )
adminOrderRouter.put('/:orderId/delivered',authenticate ,adminController.deliverOrder )
adminOrderRouter.delete('/:orderId',authenticate ,adminController.deleteOrder )

export default {adminOrderRouter}