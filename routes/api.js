const api = require('express').Router();

api.get('/', (req, res) => {
    console.info(`${req.method} request recieved for notes input`);

    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/', (req, res) => {
    console.info(`${req.method} request recieved to submit notes input`);

    const {title, text} = req.body;

    if (title && text) {
    
    const newNote = {
        title,
        text,
    }    
    }
})