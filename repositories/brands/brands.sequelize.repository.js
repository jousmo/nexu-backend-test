const { sequelize, Brands, Models } = require('../../db/models')

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

async function findModelByName (name) {
  return await Models.findOne({
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
  return await Brands.create({ average_price: 0, ...data })
}

async function createModelByBrandId (brandId, data) {
  const transaction = await sequelize.transaction()

  try {
    const model = await Models.create({ ...data, brandId: +brandId }, { transaction })
    const brand = await Brands.findByPk(brandId, { transaction })
    const average_price = brand?.average_price + (model?.average_price || 0)
    await Brands.update({ average_price }, { where: { id: brandId }, transaction })
    await transaction.commit()
    return model
  } catch (err) {
    await transaction.rollback()
    throw err
  }
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
