const User = require('../database/models/user')


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