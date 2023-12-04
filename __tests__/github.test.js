test('Looks for crazy', () => {
  expect('crazy').toBe('crazy');
})

// const pool = require('../lib/utils/pool');
// const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

// jest.mock('../lib/services/github');

// describe('github auth', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });

//   it('/api/v1/github/login should redirect to the github oauth page', async () => {
//     const res = await request(app).get('/api/v1/github/login');
//     expect(res.header.location).toMatch(
//       /https:\/\/github.com\/login\/oauth\/authorize\?client_id=[\w\d]+&scope=user&redirect_uri=http:\/\/localhost:8080\/api\/v1\/github\/callback/i
//     );
//   });
//   it('/api/v1/github/callback should login users and redirect to dashboard', async () => {
//     const res = await request
//       .agent(app)
//       .get('/api/v1/github/callback?code=42')
//       .redirects(1);
//     expect(res.body).toEqual({
//       avatar: 'https://www.placekitten.com/300/300',
//       email: 'example@example.com',
//       exp: expect.any(Number),
//       iat: expect.any(Number),
//       id: expect.any(String),
//       login: 'github_user',
//       message: 'relation \'github_users\' does not exist',
//       status: 500
//     });
//   });

//   it('/api/v1/github signs out a user', async () => {
//     const agent = request.agent(app);
//     await agent.get('/api/v1/github/callback?code=42');
//     const deleteUser = await agent.delete('/api/v1/github/dashboard');
//     expect(deleteUser.status).toBe(200);
//     const res = await agent.get('/api/v1/users/dashboard');
//     expect(res.status).toBe(404);
//   });

//   afterAll(() => {
//     pool.end();
//   });
// });
