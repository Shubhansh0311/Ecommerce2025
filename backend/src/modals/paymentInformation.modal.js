import mongoose from "mongoose";

const paymentInfoSchema = new mongoose.Schema({
    paymentMethod: { type: String, required: true },
    transactionId: { type: String, required: true },
    paymentId: { type: String, required: true },
    paymentStatus: { type: String, default: 'PENDING', required: true }
});

const PaymentInformation = mongoose.model('PaymentInformation_ecommerce', paymentInfoSchema);

export default PaymentInformation;