const express = require('express');
const { createUser, authorizationUser } = require('../service/user.service');

const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    };
});

module.exports = route;
