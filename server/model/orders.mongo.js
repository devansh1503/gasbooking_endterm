const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    status:{
        type:Boolean
    },
    customerID:String,
    orderDate: Date,
    deliveryDate: Date,
    cylinderWeight:String,
    address:String,
    cost:Number,
    payment:Boolean,
})

module.exports = mongoose.model('orders',orderSchema)