const { Router } = require('express');
const { Restaurant } = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const blogs = await Restaurant.getAll();
      res.json(blogs);
    } catch (e) {
      next(e);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const blog = await Restaurant.getById(req.params.id);
      await blog.addReview();
      res.json(blog);
    } catch (e) {
      next(e);
    }
  });
