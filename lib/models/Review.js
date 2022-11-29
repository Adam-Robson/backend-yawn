const pool = require('../utils/pool');

module.exports = class Review {
  id;
  user_id;
  restaurant_id;
  stars;
  detail;

  constructor(row) {
    this.id = row.id;
    this.user_id = row.user_id;
    this.detail = row.detail;
  }

  static async insert({ reviewId, userId, detail }) {
    const { rows } = await pool.query(
      'INSERT INTO reviews (user_id, restaurant_id, stars, detail) VALUES ($1, $2, $3, $4) RETURNING *',
      [reviewId, userId, detail]
    );
    return new Review(rows[0]);
  }
};
