const { brands, models } = require('../db')
const { searchModelsByBrandId, searchName, calculateId, searchIndex } = require('../helpers')

async function findBrands () {
  return brands || []
}

async function findModelsByBrandId (id) {
  const brand = searchModelsByBrandId(id, models)

  if (!brand) {
    throw new Error('brand not found')
  }

  return brand
}

async function createBrand (data) {
  const { name } = data
  const nameExists = searchName(name, brands)

  if (nameExists) {
    throw new Error('name brand exist')
  }

  const id = calculateId(brands)
  const newBrand = { id, ...data }
  brands.push(newBrand)

  return newBrand
}

async function createModelByBrandId (brandId, data) {
  const { average_price } = !!data && data
  const brandIndex = searchIndex(brandId, brands)

  if (typeof (average_price) === 'number' && average_price < 100000) {
    throw new Error('tha average less than 100,000')
  }

  if (brandIndex === -1) {
    throw new Error('brand not exist')
  }

  const { name } = data
  const nameExists = searchName(name, models)

  if (nameExists) {
    throw new Error('name model exist')
  }

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
  findBrands,
  findModelsByBrandId,
  createBrand,
  createModelByBrandId
}
