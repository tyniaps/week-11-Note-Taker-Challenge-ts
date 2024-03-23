const express = require('express');
const path = require('path');
const app = express();
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.get('/', (req, res) => 
   res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
   res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.use(htmlRoutes)
app.use(apiRoutes)




app.listen(PORT, () =>
console.log(`Note taking app listening at http://localhost:${PORT}`)
);