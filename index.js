const express = require('express')
const server = express()
const routes = require('./routes')
const port = 3000

server.use('/api/v1', routes)

server.listen(port, () => console.log(`Server running in port ${port}`))
