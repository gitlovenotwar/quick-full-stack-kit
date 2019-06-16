const { Router } = require('express');

const router = Router();

/** 
 * Use here all the routes for /api
 * ex. 
 * router.use('/user', require('./user'));
 * GET /api/user
**/
router.use('/users', require('./users'));

module.exports = router;
