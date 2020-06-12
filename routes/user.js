var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.getUsers);

/* GET users by ID. */
router.get('/:id', userController.getUserId);

module.exports = router;