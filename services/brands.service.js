module.exports = brandsRepository => {
  async function findBrands () {
    return await brandsRepository.findBrands()
  }

  async function findModelsByBrandId (id) {
    return await brandsRepository.findModelsByBrandId(id)
  }

  async function createBrand (data) {
    return await brandsRepository.createBrand(data)
  }

  async function createModelByBrandId (brandId, data) {
    return await brandsRepository.createModelByBrandId(brandId, data)
  }

  return {
    findBrands,
    findModelsByBrandId,
    createBrand,
    createModelByBrandId
  }
}
