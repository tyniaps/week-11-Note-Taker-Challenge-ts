const router = require('express').Router();
const fs = require("fs");
const path = require("path");


router.get('../api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, ""));
 });
 

router.get('/api/notes', async (req, res) => {
    console.info(`${req.method} request recieved for notes input`);
    const data = await JSON.parse(fs.readFileSync("/db/db.json", "utf8"))
    res.json((data));
});

router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved to submit notes input`);
    const data = JSON.parse(fs.readFileSync("/db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };

    data.push(newNote);
    fs.writeFileSync("/db/db.json",JSON.stringify(data));
    res.json(data);
});

module.exports = router;