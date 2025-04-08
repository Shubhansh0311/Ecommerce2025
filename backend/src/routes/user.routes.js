import express from "express";
import userController from  "../controller/user.controller.js"
const userRouter=express.Router()

userRouter.get("/profile",userController.getUserProfile)
userRouter.get("/",userController.getAllUsers)

export default {userRouter}