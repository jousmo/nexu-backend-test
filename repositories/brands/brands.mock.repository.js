const { brands, models } = require('../../lib/mock-db')
const { searchModelsByBrandId, searchName, calculateId, searchIndex, searchById } = require('../../helpers')

async function findBrandById (id) {
  return searchById(id, brands)
}

async function findBrandByName (name) {
  return searchName(name, brands)
}

async function findModelByName (name) {
  return searchName(name, models)
}

async function findBrands () {
  return brands || []
}

async function findModelsByBrandId (id) {
  return searchModelsByBrandId(id, models)
}

async function createBrand (data) {
  const id = calculateId(brands)
  const newBrand = { id, average_price: 0, ...data }
  brands.push(newBrand)

  return newBrand
}

async function createModelByBrandId (brandId, data) {
  const { average_price } = !!data && data
  const brandIndex = searchIndex(brandId, brands)

  // Create model
  const id = calculateId(models)
  const newModel = { id, brandId: +brandId, ...data }
  models.push(newModel)

  // Update average_price in brand
  const brand = brands[brandIndex]
  const newAveragePrice = (brand?.average_price || 0) + (average_price || 0)
  brands[brandIndex] = { ...brand, average_price: newAveragePrice }

  return newModel
}

module.exports = {
  findBrandById,
  findBrandByName,
  findModelByName,
  findBrands,
  findModelsByBrandId,
  createBrand,
  createModelByBrandId
}
