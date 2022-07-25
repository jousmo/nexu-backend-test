const express = require('express')
const asyncHandler = require('express-async-handler')
const { brandsServices } = require('../services')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
  const brands = await brandsServices.findBrands()
  res.status(200).json(brands)
}))

router.get('/:id/models', asyncHandler(async (req, res) => {
  const { id } = !!req.params && req.params
  const brand = await brandsServices.findModelsByBrandId(id)
  res.status(200).json(brand)
}))

router.post('/', asyncHandler(async (req, res) => {
  const { body } = !!req && req
  const newBrand = await brandsServices.createBrand(body)
  res.status(201).json(newBrand)
}))

router.post('/:id/models', asyncHandler(async (req, res) => {
  const { params, body } = !!req && req
  const { id } = !!params && params
  const newModel = await brandsServices.createModelByBrandId(id, body)
  res.status(201).json(newModel)
}))

module.exports = router
