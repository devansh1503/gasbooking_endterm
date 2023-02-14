const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    cost:Number,
    weight:Number,
})

module.exports = mongoose.model('inventory',inventorySchema)