import userServices from "../services/user.service.js"


const getUserProfile=async(req,res)=>{

    
    
    try {
        const jwt=await req.headers.authorization?.split(" ")[1]
      
    if(!jwt){
        return res.status(404).send({error:"token not found "})
    }
    const user =await userServices.getUserProfileByToken(jwt)
// console.log(user);

    
    res.status(200).send(user)
    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users  =await userServices.getAllUsers()
        return res.status(200).send(users)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export default{getAllUsers,getUserProfile}