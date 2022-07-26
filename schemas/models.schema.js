const Joi = require('joi')

const id = Joi.number().positive()
const average_price = Joi.number().min(100000)
const greater = Joi.number()
const lower = Joi.number()

const findModelIdSchema = Joi.object({
  id: id.required()
})

const findModels = Joi.object({
  greater,
  lower
})

const updateModelSchema = Joi.object({
  average_price: average_price.required()
})

module.exports = {
  findModelIdSchema,
  findModels,
  updateModelSchema
}
