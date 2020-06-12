require('dotenv').config()
require('./database/client')
const cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var messageRouter = require('./routes/message');
var userRouter = require('./routes/user');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', userRouter);
app.use('/message', messageRouter);

module.exports = app;
