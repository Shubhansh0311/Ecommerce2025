import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User_ecommerce',
        required: true
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItems_ecommerce',
        required: true
    }],
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    },
    totalItems: {
        type: Number,
        default: 0,
        required: true
    },
    totalDiscountedPrice: {
        type: Number,
        default: 0,
        required: true
    },
    discounts: {
        type: Number,
        default: 0,
        required: true
    }
});

const Cart = mongoose.model('Cart_ecommerce', cartSchema);

export default Cart;