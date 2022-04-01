const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},
{versionKey:false})
module.exports = mongoose.model('restaurants',resSchema)