const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {type: String, min: 2, max: 140, required: true},
    date: {type: Date, default: Date.now},
    id_user: {type: String, required: true},
    name_user: {type: String, required: true}
}, { collection: 'message' })

const Message = mongoose.model('Message', messageSchema)

module.exports = Message