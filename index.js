require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const server = express()
const routes = require('./routes')
const {
  notFoundHandler,
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
  errorHandler
} = require('./middlewares')
const { PORT, ENVIRONMENT } = require('./config/server')
const db = require('./db/models')

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use('/api/v1', routes)
server.use(notFoundHandler)
server.use(logErrors)
server.use(boomErrorHandler)
server.use(ormErrorHandler)
server.use(errorHandler)

;(async () => {
  try {
    if (ENVIRONMENT === 'test') {
      module.exports = server
    } else {
      await db.sequelize.sync().then(() => console.log('Sync DB'))
      server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
