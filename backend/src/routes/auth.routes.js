import express from "express";
import authController from "../controller/auth.controller.js"
const authRouter=express.Router()
authRouter.post("/signup",authController.register)
authRouter.post("/signin",authController.login)

export default {authRouter}

