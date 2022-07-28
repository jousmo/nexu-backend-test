const { Brands, Models } = require('../../db/models')

async function findBrandById (id) {
  return await Brands.findByPk(id)
}

async function findBrandByName (name) {
  return await Brands.findOne({
    where: {
      name
    }
  })
}

async function findBrands () {
  return await Brands.findAll()
}

async function findModelsByBrandId (id) {
  return await Models.findAll({
    where: {
      brandId: id
    }
  })
}

async function createBrand (data) {
  return await Brands.create({ ...data })
}

module.exports = {
  findBrandById,
  findBrandByName,
  findBrands,
  findModelsByBrandId,
  createBrand
}
