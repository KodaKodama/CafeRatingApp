const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const route = require('./routes/router');
const db = require('./config/db');
const bodyparser = require('body-parser');
const port = process.env.PORT;

db();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.json());

app.set("view engine", "ejs");

app.use('/', route);

app.listen(port, ()=>{
    console.log('app is running at', port);
})