import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        // required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review_ecommerce'
    }],
    paymentInformation:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentInformation_ecommerce'
    }],
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address_ecommerce'
    }],
    rating:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review_ecommerce'
    }],
    role: {
        type: String,
        default: 'CUSTOMER'
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

const User = mongoose.model('User_ecommerce', userSchema);

export default User;