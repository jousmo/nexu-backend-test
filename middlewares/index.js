const notFoundHandler = require('./notFound.handler')
const { errorHandler, logErrors } = require('./error.handler')

module.exports = {
  notFoundHandler,
  errorHandler,
  logErrors
}
