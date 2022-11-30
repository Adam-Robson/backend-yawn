const { Review } = require('../models/Review.js');

module.exports = async (req, res, next) => {
  try {
    const check = await Review.getById(req.params.id);
    if (
      check &&
      (req.user.email === 'admin' || check.user_id === req.user.id)
    ) {
      next();
    } else {
      throw new Error('This page is unavailable.');
    }
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
