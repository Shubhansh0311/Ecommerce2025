import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const dbConnect=async()=>{
   
        
       const db=await mongoose.connect("mongodb+srv://shubhansh:shubhansh@cluster0.ia7xyfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Ecommerce"
).then((success)=>{
    console.log("database connected successfully",success.connection.name);
    
}).catch ((err)=>{
        console.log("error while establishing connetion ",err)}
    )}
export default dbConnect


// import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config()
// const dbConnect=async()=>{
   
        
//        const db=await mongoose.connect(process.env.DATABASE_URL||"mongodb+srv://shubhansh:shubhansh@cluster0.ia7xyfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Ecommerce"
// ).then((success)=>{
//     console.log("database connected successfully",success.connection.name);
    
// }).catch ((err)=>{
//         console.log("error while establishing connetion ",err)}
//     )}
// export default dbConnect