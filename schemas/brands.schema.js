const Joi = require('joi')

const id = Joi.number().positive()
const name = Joi.string()
const average_price = Joi.number().min(100000)

const findBrandIdSchema = Joi.object({
  id: id.required()
})

const createBrandSchema = Joi.object({
  name: name.required()
})

const createModelByBrandIdSchema = Joi.object({
  name: name.required(),
  average_price
})

module.exports = {
  findBrandIdSchema,
  createBrandSchema,
  createModelByBrandIdSchema
}
