import userService from "../services/user.service.js";
import jwtprovider from "../config/jwtprovider.js";

const authenticate=async(req, res,next) => { 
try {
let token=await req.headers.authorization.split(" ")[1];

if(!token){
    return res.status(401).json({message:"unauthorized user",error:"token not found"})
}


let userId=await jwtprovider.getUserIdFromToken(token);


let user=await userService.getUserById(userId);

    req.user=user;


} catch (error) {
   
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2NlMmFlZTRkZjcyN2YyZjUxODBiNDEiLCJpYXQiOjE3NDE1NjQ2NTQsImV4cCI6MTc0MTczNzQ1NH0.uaSDAlNxxuReFQEr9gN_S4YKzM6aZJ0MU3Zi3jYUluc"
    // throw new Error(error.message);
    console.log("test",error.stack);
    
  
}
next()
 }

 export default authenticate;