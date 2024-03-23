const express = require('express');
const path = require('path');
const app = express();
const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');

const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));


app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () =>
console.log(`Note taking app listening at http://localhost:${PORT}`)
);