const searchModelsByBrandId = (id, schema) => schema.filter(el => el.brandId === +id)

const searchName = (name, schema) => schema.find(el => el.name.toLowerCase() === name.toLowerCase())

const calculateId = schema => schema.length ? schema.at(-1).id + 1 : 1

const searchById = (id, schema) => schema.find(el => el.id === +id)

const searchIndex = (id, schema) => schema.findIndex(el => el.id === +id)

module.exports = {
  searchName,
  searchById,
  searchModelsByBrandId,
  calculateId,
  searchIndex
}
