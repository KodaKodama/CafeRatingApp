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
        return res.redirect('/');
    }catch(e){
        return res.send(e);
    }
});

router.get('/rate/:id', async(req, res)=> {
    const id = req.params.id;
    try{
        const cafe = await Object.findById(id);
        return res.render("rate_cafe", {
            title: "Rate cafe", 
            cafe: cafe
        });
    }catch(e){
        return res.send(e);
    }
});

router.post('/rate/:id', async(req, res)=> {
    const id = req.params.id;
    const rating = parseInt(req.body.rating);
    try{
        const cafe = await Object.findById(id);
        const newSum = parseInt(cafe.reviewSum+rating);
        const newCount = cafe.reviewCount+1;
        await Object.findByIdAndUpdate(id, {
            reviewSum: newSum,
            reviewCount: newCount,
        });
       return res.redirect('/');
        
    }catch(e){
        return res.send(e);
    }
})

module.exports = router;