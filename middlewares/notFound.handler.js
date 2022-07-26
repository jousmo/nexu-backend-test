const boom = require('@hapi/boom')

function notFoundHandler (req, res) {
  const { output } = boom.notFound('resource not found')
  res.status(output.statusCode).json(output.payload)
}

module.exports = notFoundHandler
