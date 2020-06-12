const User = require('../database/models/user')
const Message = require('../database/models/message')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

// Create user
exports.createUser = (req, res) => {
    let pw = req.body.password
    console.log(req.body.name, req.body.email, req.body.password)
    bcrypt.hash(pw, saltRounds, (err, hash) => {

        let user = new User ({name: `${req.body.name}`, email: `${req.body.email}`, password: hash})
        user.save((err) => {
            console.log(err)
                if (err) {
                    res.send(err)
                }
        })
    })
}