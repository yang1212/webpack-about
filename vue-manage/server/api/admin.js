import express from 'express'
const router = express.Router()

router.use('/calculate', require('./pushContent'))
router.use('/imgData', require('./imgContent'))

module.exports = router