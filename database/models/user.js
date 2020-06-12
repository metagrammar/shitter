const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, min: 2, max: 100, required: true},
    email: {type: String, min: 2, max: 100, required: true},
    password: {type: String, min: 2, max: 100, required: true}
}, { collection: 'user' })

const User = mongoose.model('User', userSchema)

module.exports = User