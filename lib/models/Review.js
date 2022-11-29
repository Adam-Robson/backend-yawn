const pool = require('../utils/pool');

class Reviews {
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
      'INSERT INTO reviews (review_id, user_id, detail) VALUES ($1, $2, $3) RETURNING *',
      [reviewId, userId, detail]
    );
    return new Reviews(rows[0]);
  }
}

module.exports = { Reviews };
