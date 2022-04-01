const Res = require('../models/restaurant.model')

async function addRes (req,res){
    try{
        const body = req.body
        const restaurant = new Res(body)
        const savedRes = await restaurant.save()

        res.status(200).json({
            message:"Restaurant added successfully",
            savedRes
        })
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {addRes}