const User = require('../database/models/user')
const Message = require('../database/models/message')


// List all users
exports.getUsers = (req, res) => {
    User.find()
        .exec((err, user) => {
            if (err) {
                res.send(err)
            } else res.status(200).send(user)
        })
}

// Get user by ID
exports.getUserId = (req, res) => {

    const {id} = req.params
    console.log(id)
    User.findById(id)
        .exec((err, user) => {
            if (err) {
                res.send(err)
            } else res.status(200).send(user)
        })
}

// Get user messages by ID
exports.getUserMsgsById = (req, res) => {

    const id_user = req.params
    console.log(req.params)
    Message.find(id_user)
        .exec((err, user) => {
            if (err) {
                res.send(err)
            } else res.status(200).send(user)
        })
}
