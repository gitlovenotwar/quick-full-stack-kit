const { Router } = require('express');
const usersController = require('../../controllers/users');

const router = Router();

/** Define all routes here */
router.get('/:id', usersController.getUserById);

module.exports = router;
