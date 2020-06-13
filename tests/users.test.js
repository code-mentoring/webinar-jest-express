const supertest = require('supertest');
const {start} = require('../src/index');

let app;
let request;

beforeAll(async () => {
  app = await start();
  // console.log(app);
  request = supertest(app);
});

// afterAll(async res => {
//   await app.close(res);
// })


describe('GET /users', () => {
  it('should return correct list of users', async () => {
    const users = await request.get('/users')

    // console.log(users);
  });
});


describe.skip('POST /users', () => {

});
