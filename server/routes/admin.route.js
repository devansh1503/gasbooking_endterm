const express = require('express')
const mongo = require('mongodb')
const inventoryMongo = require('../model/inventory.mongo')
const ordersMongo = require('../model/orders.mongo')
const usersMongo = require('../model/users.mongo')

const AdminRoute = express.Router()

AdminRoute.get('/customers', async (req, res) => {
    const data = await usersMongo.find({ isAdmin: false })
    res.json(data)
})
// For fetching all orders-
AdminRoute.get('/orders', async (req, res) => {
    const data = await ordersMongo.find({})
    res.json(data)
})
AdminRoute.get('/inventory', async (req, res) => {
    const data = await inventoryMongo.find({})
    res.json(data)
})
AdminRoute.put('/inventory/:func', async (req, res) => {
    const data = req.body
    const func = req.params.func
    try {
        if (func === 'add') {
            await inventoryMongo.create(data)
        }
        else {
            await inventoryMongo.deleteOne({ _id: new mongo.ObjectId(data._id) })
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send('error occured')
    }
})

module.exports = {
    AdminRoute,
}