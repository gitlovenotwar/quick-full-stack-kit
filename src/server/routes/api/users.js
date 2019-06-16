const { Router } = require('express');
const usersController = require('../../controllers/users');

const router = Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);

module.exports = router;
