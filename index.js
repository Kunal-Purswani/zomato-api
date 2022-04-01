const express = require('express')
require('dotenv').config()
const port = 3000
const app = express()

require('./configs/mongodb.config')

const userRoute = require('./routes/user.route')
const resRoute = require('./routes/restaurant.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/createUser', userRoute);
app.use('/createRestaurant', resRoute);

app.get('/',(req,res)=>{
    res.send("This is Zomato API")
})

app.listen(port,()=>{
    console.log("Server is live on port 3000...")
})