const express = require('express')
const usersMongo = require('../model/users.mongo')
const { encrypt } = require('../passwordenc')

const AuthRoute = express.Router()

AuthRoute.post('/register', async (req,res)=>{
    const data = req.body
    console.log(data.password)
    data.password = encrypt(data.password)
    console.log(data.password)
    try{
        await usersMongo.create(data)
        res.send("new user added!")
    }
    catch(err){
        res.status(400).send("error occured")
    }
})
AuthRoute.post('/login', async(req,res)=>{
    var {userName, password} = req.body;
    password = encrypt(password)
    const user = await usersMongo.findOne({
        userName:userName,
        password:password
    })
    if(user){
        res.json(user)
    }
    else{
        res.status(400).send('error')
    }
})

module.exports = {
    AuthRoute,
}