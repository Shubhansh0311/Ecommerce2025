import express from 'express';
import authenticate from "../middleware/middleware.js"
import ratingController from '../controller/rating.controller.js';
const ratingRouter = express.Router();
ratingRouter.post('/create', authenticate, ratingController.createRating);
ratingRouter.get('/product/:id', authenticate, ratingController.getAllRatings);
export default {ratingRouter}