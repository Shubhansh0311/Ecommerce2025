import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User_ecommerce', required: true },
    orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItems_ecommerce', required: true }],
    orderDate: { type: Date, default: Date.now(), required: true },
    deliveryDate: { type: Date,},
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address_ecommerce',  },
    paymentDetails: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PaymentInformation_ecommerce',  
    },
    totalPrice: { type: Number, required: true },
    totalDiscountedPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    orderStatus: { type: String, required: true,default:"PENDING"},
    totalItems: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now(), required: true }
});

const Order = mongoose.model('Order_ecommerce', orderSchema);

export default Order;