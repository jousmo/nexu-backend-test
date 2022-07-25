const express = require('express')
const asyncHandler = require('express-async-handler')
const { modelsServices } = require('../services')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const { query } = !!req && req
  const models = await modelsServices.findModels(query)
  res.status(200).json(models)
}))

router.put('/:id', asyncHandler(async (req, res) => {
  const { body, params } = !!req && req
  const { id } = !!params && params

  const updateModel = await modelsServices.update(id, body)
  res.status(200).json(updateModel)
}))

module.exports = router
