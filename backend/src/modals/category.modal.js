import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories_ecommerce',
        
    },
    level: {
        type: Number,
        required: true
    }
});

const Category = mongoose.model('Categories_ecommerce', categorySchema);

export default Category