const express = require('express')
const asyncHandler = require('express-async-handler')
const { modelsServices } = require('../services')
const validatorHandler = require('../middlewares/validator.handler')
const { findModelIdSchema, findModels, updateModelSchema } = require('../schemas/models.schema')
const { modelsSequelizeRepository } = require('../repositories')
const router = express.Router()

router.get('/',
  validatorHandler(findModels, 'query'),
  asyncHandler(async (req, res) => {
    const { query } = !!req && req
    const models = await modelsServices(modelsSequelizeRepository).findModels(query)
    res.status(200).json(models)
  }))

router.put('/:id',
  validatorHandler(findModelIdSchema, 'params'),
  validatorHandler(updateModelSchema, 'body'),
  asyncHandler(async (req, res) => {
    const { body, params } = !!req && req
    const { id } = !!params && params

    const updateModel = await modelsServices(modelsSequelizeRepository).updateModel(id, body)
    res.status(200).json(updateModel)
  }))

module.exports = router
