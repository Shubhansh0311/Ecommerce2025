import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User_ecommerce', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_ecommerce', required: true },
    review: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

const Review = mongoose.model('Review_ecommerce', reviewSchema);

export default Review;