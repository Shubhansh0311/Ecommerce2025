import cartitemService from "../services/cartitem.service.js";

const updateCartItem = async (req, res) => {
    try {
        const userId = await req.user._id;
        const cartId = req.params.cartId;
        
        
        const cartData = req.body;
        const cartItem = await cartitemService.updateCartItem(userId, cartId, cartData);
       
        return res.status(200).json({message:"cart item updated successfully",cartItem});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const removeCartItem = async (req, res) => {
   
  
    
    try {
        const userId =await req.user._id;
 
    
        const cartId =await req.params.cartId;
        // console.log(cartId);
        
        const removedCartItem = await cartitemService.removeCartItem(userId, cartId);
        // console.log(removedCartItem);
        
        return res.status(200).json({message:"cart item removed successfully",removedCartItem});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export default { updateCartItem, removeCartItem };