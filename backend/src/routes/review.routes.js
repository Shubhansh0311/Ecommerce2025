import express from 'express';
import authenticate from "../middleware/middleware.js" 
import reviewController from '../controller/review.controller.js';
const reviewRouter = express.Router();
reviewRouter.post("/create",authenticate,reviewController.createReview)
reviewRouter.get("/product/:id",authenticate,reviewController.getAllReviews)


export default {reviewRouter}