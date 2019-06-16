const { Router } = require('express');
const usersController = require('../../controllers/users');

const router = Router();

router.get('/', (req, res) => {
  res.json({});
});

router.get('/:id', usersController.getUserById);

module.exports = router;
