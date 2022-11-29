const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getAll();
      res.json(restaurant);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const restaurant = await Restaurant.getById(req.params.id);
      await restaurant.addReviews();
      res.json(restaurant);
    } catch (err) {
      next(err);
    }
  })
  .post('/:id/reviews', authenticate, async (req, res, next) => {
    try {
      const review = await Review.insert({
        userId: req.user.id,
        restaurantId: req.params.id,
        stars: req.body.stars,
        detail: req.body.detail
      });
      res.json(review);
    } catch (err) {
      next(err);
    }
  });

// .delete ('/reviews/:id', authenticate, async (req, res, next) => {
//   try {
//     const review = Review.getById(req.params.id);
//     if (!req.user || req.user.email !== 'admin' || req.user.id !== review.user_id)
//       throw new Error('You are not authorized to delete this message');
//     const res = await Review.delete(req.params.id);
//     res.json();
//     if (!res) next();
//   } catch (err) {
//     err.status = 403;
//     next(err);
//   }

