require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const server = express()
const routes = require('./routes')
const { notFoundHandler, logErrors, errorHandler } = require('./middlewares')
const { PORT, ENVIRONMENT } = require('./config')

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use('/api/v1', routes)
server.use(notFoundHandler)
server.use(logErrors)
server.use(errorHandler)

if (ENVIRONMENT !== 'test') {
  server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
} else {
  module.exports = server
}
