const express = require('express');
const router =  express.Router();
const fetchuser = require('../middleware/fetchuser');
const logEntry = require('../models/LogEntry')

router.get('/getlogs',fetchuser , async (req,res)=>{
    try {
        const enteries = await logEntry.find({user: req.user.id});
        res.json(enteries)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error occured");
    }
})
router.get('/totallogs',async (req,res)=>{
    try {
        const enteries = await logEntry.find();
        res.send(enteries)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error occured");
    }
})
router.post('/addlog',fetchuser, async(req,res,next)=>{
    try {
        const{title,description,comments,rating,latitude,longitude,visitedOn}=req.body;
    const logEnter = new logEntry({title,description,comments,rating,latitude,longitude,visitedOn,user:req.user.id})
        let saved = await logEnter.save();
        res.json(saved)
    } catch (error) {
        next(error)
        res.status(500).send("some error occured");
    }
})
router.delete('/dellog',fetchuser, async(req,res)=>{
    const enteries = await logEntry.deleteMany();
    res.json(enteries)
})

module.exports= router