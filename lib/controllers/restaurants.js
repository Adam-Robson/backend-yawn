const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Restaurant = require('../models/Restaurant');
const Review = require('../models/Review');
const checkAuth = require('../middleware/checkAuth');

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
        detail: req.body.detail,
      });
      res.json(review);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', [authenticate, checkAuth], async (req, res, next) => {
    try {
      const restaurant = await Restaurant.updateById(req.params.id, req.body);
      res.json(restaurant);
      if (!restaurant) next();
    } catch (err) {
      next(err);
    }
  });
