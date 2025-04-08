
import dbConnect from "./config/db.js";
import app from "./index.js";
import dotenv from "dotenv"
dotenv.config()
const PORT =process.env.PORT||8080


app.listen(PORT,async()=>{
    await dbConnect()
    console.log("server is listening at port ",PORT);
    
})