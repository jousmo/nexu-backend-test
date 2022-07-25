const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const server = express()
const routes = require('./routes')
const { notFoundHandler, logErrors, errorHandler } = require('./middlewares')
const port = 3000

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use('/api/v1', routes)
server.use(notFoundHandler)
server.use(logErrors)
server.use(errorHandler)

server.listen(port, () => console.log(`Server running in port ${port}`))
