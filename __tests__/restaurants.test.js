const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('restaurants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it.skip('GET api/v1/restaurants should return a list of restaurants', async () => {
    const resp = await request(app).get('/api/v1/restaurants');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot();
  });

  it.skip('GET api/v1/restaurants/:id should return a restaurant with reviews', async () => {
    const resp = await request(app).get('/api/v1/restaurants/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot();
  });
});
