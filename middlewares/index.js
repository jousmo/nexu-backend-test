const notFoundHandler = require('./notFound.handler')
const {
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
  errorHandler
} = require('./error.handler')

module.exports = {
  notFoundHandler,
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
  errorHandler
}
