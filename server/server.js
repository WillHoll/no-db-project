require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const {SERVER_PORT} = process.env;



app.listening(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of beer on the wall`))