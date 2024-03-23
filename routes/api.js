const api = require('express').Router();

api.get('/', (req, res) => {
    console.info(`${req.method} request recieved for notes input`);

    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});