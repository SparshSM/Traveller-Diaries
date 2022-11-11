const express = require('express');
const router =  express.Router();
const logEntry = require('../models/LogEntry')
router.get('/',async (req,res)=>{
    const enteries = await logEntry.find();
    res.send(enteries)
})
router.post('/', async(req,res,next)=>{
    try {
    const logEnter = new logEntry(req.body) 
        let saved = await logEnter.save();
        res.json(saved)
    } catch (error) {
        next(error)
    }
})
router.delete('/', async(req,res)=>{
    const enteries = await logEntry.deleteMany();
    res.json(enteries)
})

module.exports= router