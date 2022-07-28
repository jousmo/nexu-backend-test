module.exports = modelsRepository => {
  async function findModels ({ greater, lower }) {
    return await modelsRepository.findModels({ greater, lower })
  }

  async function updateModel (id, changes) {
    return await modelsRepository.updateModel(id, changes)
  }

  return {
    findModels,
    updateModel
  }
}
