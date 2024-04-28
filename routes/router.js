const express = require('express');
const router = express.Router();
const Object = require('../model/model');

router.get('/', async (req, res)=> {
    try {
        const cafes = await Object.find();
        return res.render("home", {
            title: "home page",
            data: cafes
            
        });
        res.send("hello world")
    }catch(e){
        res.send(e);
    }
});

router.get('/add', (req, res)=> {
    res.render("add_cafe", {
        title: "Add a new Cafe"
    })
});
router.post('/add', async(req, res)=> {
    try{
        const cafe = new Object({
            name: req.body.name,
            phone: req.body.phone,
            reviewSum: 0,
            reviewCount: 0,
        });
        await cafe.save();
        console.log('save data');
        res.redirect('/');
        res.send(cafe);
    }catch(e){
        console.log(e);
    }
});

module.exports = router;