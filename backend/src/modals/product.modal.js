import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountedPrice: {
            type: Number,
            required:true
        },
        discountedPercent: {
            type: Number,
            required:true
        },
        quantity: {
            type: Number,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        colors: {
            type: [String],
            required:true
        },
        size: [
            {
                name: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        imageUrl: {
            type: String,
            required: true,
        },
        ratings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Rating_ecommerce",
            },
        ],
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review_ecommerce",
            },
        ],
        numRatings: {
            type: Number,
            default: 0,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories_ecommerce",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product_ecommerce", productSchema);

export default Product;
