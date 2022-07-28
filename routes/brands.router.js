const express = require('express')
const asyncHandler = require('express-async-handler')
const { brandsServices } = require('../services')
const validatorHandler = require('../middlewares/validator.handler')
const {
  findBrandIdSchema,
  createBrandSchema,
  createModelByBrandIdSchema
} = require('../schemas/brands.schema')
const { brandsMockRepository } = require('../repositories')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const brands = await brandsServices(brandsMockRepository).findBrands()
  res.status(200).json(brands)
}))

router.get('/:id/models',
  validatorHandler(findBrandIdSchema, 'params'),
  asyncHandler(async (req, res) => {
    const { id } = !!req.params && req.params
    const brand = await brandsServices(brandsMockRepository).findModelsByBrandId(id)
    res.status(200).json(brand)
  }))

router.post('/',
  validatorHandler(createBrandSchema, 'body'),
  asyncHandler(async (req, res) => {
    const { body } = !!req && req
    const newBrand = await brandsServices(brandsMockRepository).createBrand(body)
    res.status(201).json(newBrand)
  }))

router.post('/:id/models',
  validatorHandler(findBrandIdSchema, 'params'),
  validatorHandler(createModelByBrandIdSchema, 'body'),
  asyncHandler(async (req, res) => {
    const { params, body } = !!req && req
    const { id } = !!params && params
    const newModel = await brandsServices(brandsMockRepository).createModelByBrandId(id, body)
    res.status(201).json(newModel)
  }))

module.exports = router
