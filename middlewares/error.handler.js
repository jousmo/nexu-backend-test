const boom = require('@hapi/boom')
const { ValidationError, DatabaseError } = require('sequelize')
const { ENVIRONMENT } = require('../config/server')

function logErrors (err, req, res, next) {
  const { message, stack } = err
  if (ENVIRONMENT !== 'test') {
    console.error({ message, stack })
  }
  next(err)
}

function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output.payload)
  }

  next(err)
}

function ormErrorHandler (err, req, res, next) {
  if (err instanceof ValidationError || err instanceof DatabaseError) {
    const { output } = boom.conflict(err.name)
    const newOutput = {
      ...output.payload,
      errors: err.errors || err.message
    }

    return res.status(output.statusCode).json(newOutput)
  }

  next(err)
}

function errorHandler (err, req, res, next) {
  if (err) {
    const { output } = boom.badImplementation()
    return res.status(output.statusCode).json(output.payload)
  }

  next()
}

module.exports = {
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
  errorHandler
}
