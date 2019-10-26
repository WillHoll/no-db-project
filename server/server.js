const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
const {SERVER_PORT} = process.env;

const ctrl = require('./controllers/controller')
const myCtrl = require('./controllers/personalController')


app.get('/api/adventures', ctrl.getAdventures)
app.get('/api/mylist', myCtrl.getAdventures)

app.post('/api/adventures', ctrl.makeAdventure)
app.post('/api/mylist', myCtrl.addAdventure)

app.delete('/api/mylist/:id', myCtrl.removeAdventure)

app.put('/api/mylist/:id', myCtrl.editAdventure)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of beer on the wall`))