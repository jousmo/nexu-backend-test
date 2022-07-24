const express = require('express')
const router = express.Router()
const brandsRouter = require('./brands.router')
const modelsRouter = require('./models.router')

router.use('/brands', [brandsRouter])
router.use('/models', [modelsRouter])

module.exports = router
