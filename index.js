const express = require('express')
require('dotenv').config()
const port = 3000
const app = express()

require('./configs/mongodb.config')

app.get('/',(req,res)=>{
    res.send("This is Zomato API")
})

app.listen(port,()=>{
    console.log("Server is live on port 3000...")
})