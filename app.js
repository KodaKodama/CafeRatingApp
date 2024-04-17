const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const db = require('./config/db');
const port = process.env.PORT;

app.get('/', (req, res)=> {
    res.send('hello world')
});
db();

app.listen(port, ()=>{
    console.log('app is running at', port);
})