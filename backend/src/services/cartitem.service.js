// import Cart from "../modals/cart.modal";
import CartItems from "../modals/cartitem.modal.js";

import userServices from "./user.service.js";

const updateCartItem = async (userId, cartId, cartData) => {
 
  // console.log(userId,cartId,cartData);
  
  try { 
    const user = await userServices.getUserById({userId});
    const cartItem = await findCartItemById(cartId);
    if (!user) {
      throw new Error("user not exist with the userID :", userId);
    }
    if (!cartItem) {
      throw new Error("user not exist with the userID :", userId);
    }
    if (user._id.toString() === userId.toString()) {
      //  👉check it once
      cartItem.quantity = cartData.quantity;
      
      
      cartItem.price = cartItem.quantity * cartItem.product.price;
     console.log("test",cartItem.product.price);
      cartItem.discountedPrice =cartItem.quantity * cartItem.product.price;
      const updateCartItem = await cartItem.save();
    
      
      return updateCartItem;
    } else {
      throw new Error(
        "cart cannot be updated with unauthorized user id ",
        userId
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const removeCartItem = async (userId, cartId) => {

  
  try {
    const user = await userServices.getUserById({userId});
 
    
    const cartItem = await findCartItemById(cartId);
    if (!user) {
      throw new Error("user not exist with the userID :", userId);
    }
    if (!cartItem) {
      throw new Error("cart does not exist with this userID:", userId);
    }
    if (user._id.toString() === userId.toString()) {
    return  await CartItems.findByIdAndDelete(cartId);
    } else {
      throw new Error("you can't remove another user cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
const findCartItemById = async (cartId) => {

  
  try {
    const item = await CartItems.findById(cartId).populate("product");
    if (item) {
      return item;
    } else {
      throw new Error("cart item not found with cartID ", cartId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export default { findCartItemById, removeCartItem, updateCartItem };
