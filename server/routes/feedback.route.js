const express = require('express');
const { feedback } = require('../model/feedback.mongo');

const feedRoute = express.Router()

feedRoute.get('/', async(req,res)=>{
    const data = await feedback.find({})
    res.json(data)
})

feedRoute.post('/', async(req,res)=>{
    const data = req.body;
    console.log(data)
    try{
        const r = await feedback.create(data)
        res.send('feedback added!')
    }
    catch(err){
        console.log(err)
    }
})

module.exports = {
    feedRoute,
}