const api = require('express').Router();
const fs = require("fs")

api.get('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved for notes input`);
    const data = fs.readFileSync("/db/db.json", "utf8");

    res.json(JSON.parse(data));
});

api.post('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved to submit notes input`);
    const data = fs.readFileSync("/db/db.json", "utf8");
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };

    data.push(newNote);
    fs.writeFileSync("/db/db.json",JSON.stringify(newNote));
    res.json(data);
});

module.exports=api