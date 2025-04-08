import Cart from "../modals/cart.modal.js";
import CartItems from "../modals/cartitem.modal.js";
import Product from "../modals/product.modal.js";

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    const cartCreated = await cart.save();
    return cartCreated;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findUserCart = async (userId) => {
  // console.log("cartservice",userId);
  try {
    const cart = await Cart.findOne({ user: userId });
    const cartItems = await CartItems.find({ cart: cart._id }).populate(
      "product"
    );
    cart.cartItems = cartItems;
    let totalPrice = 0,
      totalDiscountedPrice = 0,
      totalItems = 0;
    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItems += cartItem.items;
    }

    cart.totalPrice = totalPrice;
    cart.discounts = totalPrice - totalDiscountedPrice;
    cart.totalItems = totalItems;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addCartItem = async (userId, req) => {
  // console.log("req.body",req);
  
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);
    
    
    const isProductPresent = await CartItems.findOne({
      cart: cart._id,
      userId: userId,
      product: product._id,
    });
    if (!isProductPresent) {
      let cartItem =new CartItems({
        cart: cart._id,
        product: product._id,
        userId,
        size: req.size,
        quantity: 1,
        price: product.price,
        discountedPrice: product.discountedPrice,
      });
      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to the cart ";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export default { createCart, findUserCart, addCartItem };
