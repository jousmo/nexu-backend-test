const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ ok: true })
})

router.get('/:id/models', (req, res) => {
  res.json({ ok: true })
})

router.post('/', (req, res) => {
  res.json({ ok: true })
})

router.post('/:id/models', (req, res) => {
  res.json({ ok: true })
})

module.exports = router
