import ratingService from "../services/rating.service.js";


const createRating = async (req, res) => {
  try {
    const user =await  req.user
    const ratingData= req.body
    const rating = await ratingService.createRating(ratingData, user);
    res.status(201).send({message:"rating created successfully",rating});
  } catch (error) {
    res.status(400).send(error.message);
  }
}
const getAllRatings = async (req, res) => {
  try {
    const productId = req.params.productId
    const ratings = await ratingService.getAllRatings(productId);
    res.status(200).send(ratings);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
export default { createRating, getAllRatings };