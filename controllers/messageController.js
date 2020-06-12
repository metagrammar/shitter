const Message = require('../database/models/message')


// List all messages
exports.getMessages = (req, res) => {
    Message.find()
            .then(data => res.json(data))
            .catch(err => console.error(err))
}

// Get message by user id
exports.getMessagesByUserId = (req, res) => {
    const user_id = req.params
    console.log(user_id)
    Message.find(user_id)
            .then(data => res.json(data))
            .catch(err => console.error(err))
}
