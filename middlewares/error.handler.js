const boom = require('@hapi/boom')
const { ENVIRONMENT } = require('../config')

function logErrors (err, req, res, next) {
  const { message, stack } = err
  if (ENVIRONMENT !== 'test') {
    console.error({ message, stack })
  }
  next(err)
}

function errorHandler (err, req, res, next) {
  let error

  if (!err.isBoom) {
    const { output } = boom.badImplementation()
    error = output
  } else {
    const { output } = err
    error = output
  }

  res.status(error.statusCode).json(error.payload)
}

module.exports = {
  logErrors,
  errorHandler
}
