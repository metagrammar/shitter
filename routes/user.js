var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.getUsers);

/* GET users by ID. */
router.get('/:id', userController.getUserId);

/* GET user messages by ID. */
router.get('/:id_user/message', userController.getUserMsgsById);

/* POST create user: name, email, password (hashed). */
router.post('/create', userController.createUser);

/* POST verify user / password (hash) and set token. */
router.post('/verify', userController.verifyUser);

module.exports = router;