const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()
const { AuthRoute } = require('./routes/auth.route');
const { OrderRoute } = require('./routes/order.route');
const { AdminRoute } = require('./routes/admin.route');
const { feedRoute } = require('./routes/feedback.route');

const app = express();
app.use(express.json())
app.use(cors({}))

app.use(AuthRoute)
app.use('/orders', OrderRoute)
app.use('/admin', AdminRoute)
app.use('/feedback', feedRoute)

mongoose.connection.on('open',()=>{
    console.log("connected with mongo!");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

const connectDB = () =>{
    mongoose.connect(process.env.mongoURL);
    app.listen(4000, ()=>{
        console.log('http://localhost:4000/')
    })
}

connectDB();
