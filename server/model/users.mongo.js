const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        lowercase:true,

    },
    email:{
        type:String,
        unique:true
    },
    fullName:String,
    age:Number,
    password:{
        type:String
    },
    isAdmin:Boolean
})

module.exports = mongoose.model('users',userSchema)