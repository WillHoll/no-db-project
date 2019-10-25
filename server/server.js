require('dotenv').config();
const express = require('express');
const {SERVER_PORT} = process.env;
const ctrl = require('./controllers/controller')

const app = express();
app.use(express.json());

app.get('/api/adventures', ctrl.getAdventures)

app.post('/api/adventures', ctrl.makeAdventure)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of beer on the wall`))