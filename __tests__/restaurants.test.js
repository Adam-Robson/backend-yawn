const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

const testUser = {
  firstName: 'Test User',
  lastName: 'Testing User',
  email: 'user@testing.com',
  password: '123456789',
};

const registerAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? testUser.password;
  const agent = request.agent(app);
  const user = await UserService.create({ ...testUser, ...userProps });
  const { email } = user;
  await agent.post('/api/v1/users/sessions').send({ email, password });
  return [agent, user];
};

describe('restaurants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET api/v1/restaurants should return a list of restaurants', async () => {
    const res = await request(app).get('/api/v1/restaurants');
    expect(res.status).toBe(200);
    // expect(res.body).toMatchInlineSnapshot();
  });

  test('GET api/v1/restaurants/:id should return a restaurant with reviews', async () => {
    const res = await request(app).get('/api/v1/restaurants/1');
    expect(res.status).toBe(200);
    // expect(res.body).toMatchInlineSnapshot();
  });

  test('POST /api/v1/restaurants/:id/reviews should create a new review when logged in', async () => {
    const [agent] = await registerAndLogin();
    const res = await agent.post('/api/v1/restaurants/1/reviews').send({
      stars: 5,
      detail: 'This is urgent. I have something to say. Call the fire brigade.',
    });
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "detail": "This is urgent. I have something to say. Call the fire brigade.",
        "id": "4",
        "stars": 5,
        "user_id": "4",
      }
    `);
  });
  test('DELETE /api/v1/reviews/:id should delete a review', async () => {
    const [agent] = await registerAndLogin();
    const postResp = await agent.post('/api/v1/restaurants/1/reviews').send({
      detail: 'another new review, a hot take, opinion soup and influence',
      stars: 2,
    });
    const res = await agent
      .delete(`/api/v1/reviews/${postResp.body.id}`)
      .send({ message: 'Thank god this review was deleted!' });
    expect(res.status).toBe(200);
  });
});

afterAll(() => {
  pool.end();
});
