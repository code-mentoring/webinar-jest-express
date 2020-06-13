const {Router} = require('express');
const router = Router();

module.exports = router;

module.exports.users = [
  {name: 'Bob Marley', age: 40, profession: 'Musician'},
  {name: 'Bruce Wayne', age: 30, profession: 'Billionaire'},
];

router.get('/users', (req, res) => {
  res.json(module.exports.users);
});
