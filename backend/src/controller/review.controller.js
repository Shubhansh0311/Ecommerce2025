import reviewService from "../services/review.service.js";

const createReview = async (req, res) => {
    try {
        const user =await  req.user;
        const review = await reviewService.createReview(req.body, user);
        return res.status(201).json({message:"Review created successfully",review});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getAllReviews = async (req, res) => { 
    try {
        const productId = req.params.productId;
        const reviews = await reviewService.getAllReviews(productId);
        return res.status(200).json(reviews);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default { createReview, getAllReviews };