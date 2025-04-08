import User from "../modals/user.modal.js";
import jwtProvider from "../config/jwtprovider.js"
import bcrypt from "bcrypt"
const createUser=async(userData)=>{
    try {
        let{firstName,lastName,email,password}=userData;

        const isEmailExist=await User.findOne({email});
        if(isEmailExist){
            throw new Error("user exist with this email ",email);
        }
        password=await bcrypt.hash(password,8)
        const user =await User.create({firstName,lastName,email,password})
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

const getUserById=async({userId})=>{

// console.log(userId);

    try {
        const user = await User.findById(userId)
    //    console.log("user",user);
       
        
        // .populate('address');
        if (!user) {
            throw new Error("User not found with******** userid ",userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }
}
const getUserByEmail=async(email)=>{
    try {
        const user =await User.findOne({email})
        if(!user){
            throw new Error("user not find with email id  ",email)
        }
        return user;
    } catch (error) {
        throw new Error(error.message)
    }
}
const getUserProfileByToken=async(token)=>{
    try {
        const users=await jwtProvider.getUserIdFromToken(token)
        
        
    const user=await User.findById(users.userId)
    
    if(!user){
        throw new Error("user not found with id",userId)
    }
        return user;
    } catch (error) {
        throw new Error(error.message)
        
    }
}

const getAllUsers=async()=>{
    try {
        const users=await User.find()
    return users
    } catch (error) {
        throw new Error(error.message)
    }
}

export default{getAllUsers,getUserProfileByToken,createUser,getUserByEmail,getUserById}