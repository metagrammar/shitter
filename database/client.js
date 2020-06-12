const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`Connected to the db on port ${process.env.PORT}`))
        .catch(err => console.error(err))
        // .catch() for errors on connection time.

const client = mongoose.connection

// .on() for errors after connection is established.
client.on('error', (err) => {
    console.error(err)
})

module.exports = client