const { models, brands } = require('../lib/mock-db')
const { searchIndex } = require('../helpers')
const boom = require('@hapi/boom')

async function findModels ({ greater, lower }) {
  if (greater && lower) {
    return models.filter(model => model?.average_price > greater && model?.average_price < lower) || []
  } else if (greater) {
    return models.filter(model => model?.average_price > greater) || []
  } else if (lower) {
    return models.filter(model => model?.average_price < lower) || []
  } else {
    return models || []
  }
}

async function updateModel (id, changes) {
  const { average_price } = !!changes && changes

  const index = searchIndex(id, models)

  if (index === -1) {
    throw boom.notFound('model not found')
  }

  // Update the model
  const model = models[index]
  const updateModel = { ...model, ...changes }
  models[index] = updateModel

  // Update average_price in brand
  const { brandId, average_price: old_average_price } = !!model && model
  const brandIndex = searchIndex(brandId, brands)
  const brand = brands[brandIndex]
  const newAveragePrice = ((brand?.average_price || 0) - (old_average_price || 0)) + (average_price || 0)
  brands[brandIndex] = { ...brand, average_price: newAveragePrice }

  return updateModel
}

module.exports = {
  findModels,
  updateModel
}
