const { Router } = require('express');

const router = Router();

/** 
 * Use here all the routes for /api
 * ex. 
 * router.use('/users', require('./users'));
 * GET /api/users
**/
router.use('/users', require('./users'));

module.exports = router;
