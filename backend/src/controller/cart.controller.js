import cartService from "../services/cart.service.js";

const createCart = async (req, res) => {
    try {
        const user = await req.user;
        const cart = await cartService.createCart(user);
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const findUserCart = async (req, res) => {
    // console.log("req.user", req.user);
    
    try {
        const user =await req.user;
        const cartItem = await cartService.findUserCart(user._id);
        return res.status(200).json(cartItem);
    } catch (error) {
        // return res.status(500).json({ message: error.message });
        console.log(error.message);
        throw new Error(error.message);
    }
}
const addCartItem = async (req, res) => {
//   console.log("req.user", req.user);
    try {
        const userId =await req.user._id;
        // console.log("userId", userId);
        
        const cartItem = await cartService.addCartItem(userId, req.body);
        return res.status(200).json({message:cartItem});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export default { createCart, findUserCart, addCartItem };