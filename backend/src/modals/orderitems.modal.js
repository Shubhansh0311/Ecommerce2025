import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_ecommerce', required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User_ecommerce', required: true },
    
});

const OrderItems = mongoose.model('OrderItems_ecommerce', orderItemsSchema);

export default OrderItems;