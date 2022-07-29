const boom = require('@hapi/boom')

module.exports = modelsRepository => {
  async function findModels ({ greater, lower }) {
    return await modelsRepository.findModels({ greater, lower })
  }

  async function updateModel (id, changes) {
    const model = modelsRepository.findModelById(id)

    if (!model) {
      throw boom.notFound('model not found')
    }

    return await modelsRepository.updateModel(id, changes)
  }

  return {
    findModels,
    updateModel
  }
}
