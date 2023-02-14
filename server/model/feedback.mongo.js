const mongoose = require('mongoose')

const feedschm = mongoose.Schema({
    userId:String,
    feedback:String,
})
const feedback = mongoose.model('feedback',feedschm)
module.exports = {
    feedback,
}