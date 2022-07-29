const boom = require('@hapi/boom')
module.exports = brandsRepository => {
  async function findBrands () {
    return await brandsRepository.findBrands()
  }

  async function findModelsByBrandId (id) {
    const brand = await brandsRepository.findBrandById(id)

    if (!brand) {
      throw boom.notFound('brand not found')
    }

    return await brandsRepository.findModelsByBrandId(id)
  }

  async function createBrand (data) {
    const { name } = !!data && data
    const nameExists = await brandsRepository.findBrandByName(name)

    if (nameExists) {
      throw boom.conflict('name brand exist')
    }

    return await brandsRepository.createBrand(data)
  }

  async function createModelByBrandId (brandId, data) {
    const { name } = !!data && data
    const brand = await brandsRepository.findBrandById(brandId)

    if (!brand) {
      throw boom.notFound('brand not found')
    }

    const nameModelExists = await brandsRepository.findModelByName(name)

    if (nameModelExists) {
      throw boom.conflict('name model exist')
    }

    return await brandsRepository.createModelByBrandId(brandId, data)
  }

  return {
    findBrands,
    findModelsByBrandId,
    createBrand,
    createModelByBrandId
  }
}
