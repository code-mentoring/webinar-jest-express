const supertest = require('supertest');
const { start } = require('../src/index');
const { users } = require('../src/routes/users');

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
  let json;

  beforeEach(async () => {
    const res = await request.get('/users')
    json = JSON.parse(res.res.text);
  })

  it('should return correct list of users', () => {
    expect(json[0]).toEqual(users[0]);
    // Ensure it's returning ALL users
    expect(json).toHaveLength(users.length);
  });

  it('should have age property of type number', () => {
    expect(json[0]).toHaveProperty('age');
    expect(json[0].age).toBeNumber();
  })

  // ...
});


describe('POST /users', () => {
  it('should successfully create a user', () => {
    const user = { name: 'Mary Jane', age: 22 };
    request
      .post('/users')
      .send({ name: 'Mary Jane', age: 22 })
      .expect(user);
  });


  ['name', 'age', 'profession'].forEach((key) => {
    it(`should fail when not providing a ${key}`, async () => {
      const user = { name: 'Mary Jane', age: 22 , profession: 'CEO'};
      delete user[key]; // Remove required field
      await request
        .post('/users')
        .send(user)
        .expect(400)
        .expect({
          message: `No ${key} provided`
        })
    });
  });
});
