import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
const SECRET_KEY="asfsadfewafawfwaefwefwweerwtyytufvsg"


const generateToken=async(userId)=>{
    const user = jwt.sign({userId},SECRET_KEY,{expiresIn:'48h'})
    return user 

}
const getUserIdFromToken=async(token)=>{
    const decodeToken=jwt.verify(token,SECRET_KEY)
    return decodeToken

}
export default {generateToken,getUserIdFromToken}
