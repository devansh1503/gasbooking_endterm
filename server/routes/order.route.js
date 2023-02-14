const express = require('express')
const ordersMongo = require('../model/orders.mongo')
const OrderRoute = express.Router()
const mongo = require('mongodb')

OrderRoute.post('/', async (req, res) => {
    const data = req.body
    try {
        await ordersMongo.create(data)
        res.send('order placed!')
    }
    catch (err) {
        res.status(400).send(err)
        console.log(err)
    }
})
// for fetching customer orders-
OrderRoute.get('/:userName', async (req, res) => {
    const userName = req.params.userName
    try {
        const ordersList = await ordersMongo.find({
            customerID: userName
        })
        res.json(ordersList)
    }
    catch (err) {
        res.status.send(err)
    }
})
OrderRoute.put('/:id/:func', async (req, res) => {
    const func = req.params.func;
    // also update delivery date
    const id = req.params.id
    try {
        if (func === 'status') {
            await ordersMongo.updateOne({
                _id: new mongo.ObjectId(id)
            }, {
                status: true
            })
        }
        else{
            await ordersMongo.updateOne({
                _id: new mongo.ObjectId(id)
            },{
                deliveryDate: new Date()
            })
        }
        res.send("updated!")
    }
    catch (err) {
        res.status(400).send(err)
        console.log(err)
    }
})
module.exports = {
    OrderRoute,
}