import Rating from "../modals/Rating.modal.js";
import productService from "./product.service.js";


const createRating = async (reqDate, user) => {
  try {
    const product = await productService.findProductById(reqDate.productId);
    const rating = new Rating({
      user: user._id,
      product: reqDate.productId,
      Rating: reqDate.Rating,
      createdAt: Date.now(),
    });
    await product.save();
    return await rating.save();
  } catch (error) {
    throw new Error(error.message);
  }
};
const getAllRatings = async (productId) => {
  try {
    
    return await Rating.find({ product: productId }).populate(
      "User_ecommerce"
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { createRating, getAllRatings };
