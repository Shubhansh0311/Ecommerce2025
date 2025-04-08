import mongoose  from "mongoose";

const cartItemsSchema=new mongoose.Schema({
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart_ecommerce', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_ecommerce', required: true },
    size: { type: String, required: true },
    quantity: { type: Number, default: 1, required: true },
    price: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User_ecommerce', required: true },
    discountedPrice: { type: Number },
})

const CartItems= mongoose.model("CartItems_ecommerce",cartItemsSchema)
export default CartItems