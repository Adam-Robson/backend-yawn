const pool = require('../utils/pool');
const Review = require('./Review');
module.exports = class Restaurant {
  id;
  name;
  cuisine;
  cost;
  image;
  website;
  reviews;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.cuisine = row.cuisine;
    this.cost = row.cost;
    this.image = row.image;
    this.website = row.website;
    this.reviews = row.reviews;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM restaurants');
    return rows.map(row => new Restaurant(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from restaurants WHERE id = $1;',
      [id]
    );
    if (!rows) return null;
    return new Restaurant(rows[0]);
  }

  static async updateById(id, attrs) {
    const restaurant = await Restaurant.getById(id);
    if (!restaurant) return null;
    const { name, cuisine, cost, image, website, reviews } = { ...Restaurant, ...attrs };
    const { rows } = await pool.query(
      `
      UPDATE restaurants
      SET name=$2, cuisine=$3, cost=$4, image=$5, website=$6, reviews=$7
      WHERE id=$1 RETURNING *`,
      [id, name, cuisine, cost, image, website, reviews]
    );
    if (!rows[0]) null;
    return new Restaurant(rows[0]);
  }

  async addReviews() {
    const { rows } = await pool.query(
      'SELECT * from reviews where restaurant_id = $1',
      [this.id]
    );
    this.reviews = rows.map((row) => new Review(row));
  }
};
