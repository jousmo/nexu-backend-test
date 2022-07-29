const { Op } = require('sequelize')
const { Brands, Models, sequelize } = require('../../db/models')

async function findModelById (id) {
  return await Models.findByPk(id)
}

async function findModels ({ greater, lower }) {
  const filters = (greater && lower)
    ? { average_price: { [Op.gt]: greater, [Op.lt]: lower } }
    : greater
      ? { average_price: { [Op.gt]: greater } }
      : lower
        ? { average_price: { [Op.lt]: lower } }
        : {}

  return await Models.findAll({ where: { ...filters } })
}

async function updateModel (id, changes) {
  const transaction = await sequelize.transaction()

  try {
    const { average_price } = !!changes && changes

    const model = await Models.findByPk(id, { transaction })
    const { brandId, average_price: old_average_price } = !!model && model
    const brand = await Brands.findByPk(brandId, { transaction })
    const newAveragePrice = ((brand?.average_price || 0) - (old_average_price || 0)) + (average_price || 0)

    const [, [modelUpdated]] = await Models.update(changes, { where: { id }, returning: true, transaction })
    await Brands.update({ average_price: newAveragePrice }, { where: { id: brandId }, transaction })
    await transaction.commit()
    return modelUpdated
  } catch (err) {
    await transaction.rollback()
    throw err
  }
}

module.exports = {
  findModelById,
  findModels,
  updateModel
}
