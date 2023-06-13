const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use('/user', user);

app.use((err, req, res, next) => {
    res.send(err.message);
});

module.exports = app;