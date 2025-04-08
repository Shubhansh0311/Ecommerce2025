import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User_ecommerce', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_ecommerce', required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() }
});

const Rating = mongoose.model('Rating_ecommerce', ratingSchema);

export default Rating;