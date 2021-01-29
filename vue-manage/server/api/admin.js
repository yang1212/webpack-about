import express from 'express'
const router = express.Router()

router.use('/calculate', require('./pushContent'))

module.exports = router