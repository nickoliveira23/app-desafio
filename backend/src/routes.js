const express = require('express');
const connection = require('./database/connection');


const callController = require('./controllers/callController');

const routes = express.Router();

routes.post('/call', callController.phoneCall);

routes.post('/register', async (req, res) => {
    const { origin, receiver, value } = req.body;

    try {
        const response = await connection('dddList')
            .insert({
                origin: origin,
                receiver: receiver,
                value: value
            })

            return res.json(response)
    } catch (error) {
        console.log(error)
    }
})

module.exports = routes;