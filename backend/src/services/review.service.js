import Review from "../modals/review.modal.js";
import productService from "./product.service.js";

const createReview = async (reqData, user) => {
  try {
    const product = await productService.findProductById(reqData.productId);
    const review = new Review({
      user: user._id,
      product: reqData.productId,
      review: reqData.review,
      createdAt: Date.now(),
    });
    await product.save();
    return await review.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllReviews = async (productId) => {
  try {
    return await Review.find({ product: productId }).populate("User_ecommerce");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { createReview, getAllReviews };
