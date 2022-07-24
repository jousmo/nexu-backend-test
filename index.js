const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('Hola mi primer server en express')
})

server.listen(port, () => console.log(`Server running in port ${port}`))
