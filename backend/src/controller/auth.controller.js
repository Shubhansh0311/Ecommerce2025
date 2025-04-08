import bcrypt from "bcrypt"
import jwtprovider from "../config/jwtprovider.js"
import User from "../modals/user.modal.js"

import userService from "../services/user.service.js"
import cartService from "../services/cart.service.js"

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        // console.log(user);
        
        const jwtToken = await jwtprovider.generateToken(user._id)

        await cartService.createCart(user)
        return res.status(200).send({ jwtToken, message: "register successfully " })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
       
        
        const user = await userService.getUserByEmail(email)
        // console.log(user);
        
        if (!user) {
            return res.status(404).send({ message: "user not found with email ", email })
        }
       
        
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
        // console.log(isPasswordValid);
        
        if (!isPasswordValid) {
            return res.status(404).send({ message: "invalid credentials" })

        }
        const jwt = await jwtprovider.generateToken(user._id)
        return res.status(200).send({ jwt, message: "login successfully " })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


export default{register,login}