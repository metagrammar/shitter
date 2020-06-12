var express = require('express');
const messageController = require('../controllers/messageController')
var router = express.Router();

/* GET users listing. */
router.get('/', messageController.getMessages);

/* GET users listing. */
router.get('/:_id', messageController.getMessagesByMsgId);

module.exports = router;