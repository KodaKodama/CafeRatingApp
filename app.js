const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=> {
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log('app is running at', port);
})