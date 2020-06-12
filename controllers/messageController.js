const Message = require('../database/models/message')


// List all messages
exports.getMessages = (req, res) => {
    Message.find()
            .then(data => res.json(data))
            .catch(err => console.error(err))
}

// Get message by message id
exports.getMessagesByMsgId = (req, res) => {
    const _id = req.params
    console.log(_id)
    Message.find(_id)
            .then(data => res.json(data))
            .catch(err => console.error(err))
}

// Get message by message id
exports.getUserMgsById = (req, res) => {
    const id = req.params
    console.log(id)
    Message.find(id)
            .then(data => res.json(data))
            .catch(err => console.error(err))
}
