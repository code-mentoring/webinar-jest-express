const {Router} = require('express');
const router = Router();

module.exports = router;

const users = [
  {name: 'Bob Marley', age: 40, profession: 'Musician'},
  {name: 'Bruce Wayne', age: 30, profession: 'Billionaire'},
];
module.exports.users = users;

router.get('/users', (req, res) => {
  res.json(users);
});

router.post('/users', (req, res, next) => {
  const {name, age, profession} = req.body;

  if (!name) {
    res.status(400);
    return next(new Error('No name provided'));
  }
  if (!age) {
    res.status(400);
    return next(new Error('No age provided'));
  }
  if (!profession) {
    res.status(400);
    return next(new Error('No profession provided'));
  }

  const newUser = { name, age, profession }
  users.push(newUser);
  res.json(newUser);
});
