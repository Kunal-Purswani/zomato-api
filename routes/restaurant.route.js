const router = require('express').Router()
const {addRes} = require('../controllers/restaurant.controller')

router.post('/',addRes)

module.exports = router