const test = require('ava')
const supertest = require('supertest')
const server = require('../')
const request = supertest(server)

test('Get brands', async t => {
  const { status, body } = await request.get('/api/v1/brands')
  const [first] = body
  t.is(status, 200)
  t.true(Array.isArray(body))
  t.deepEqual(first, {
    id: 1,
    name: 'Acura',
    average_price: 375684.5
  })
})

test('Get models by brands id', async t => {
  const { status, body } = await request.get('/api/v1/brands/1/models')
  t.is(status, 200)
  t.deepEqual(body, {
    id: 1,
    name: 'ILX',
    average_price: 303176,
    brandId: 1
  })
})

test('Get models by brands id with error payload id', async t => {
  const { status, body } = await request.get('/api/v1/brands/0/models')
  t.is(status, 400)
  t.like(body, { error: 'Bad Request' })
})

test('Get models by brands id with error brand not found', async t => {
  const { status, body } = await request.get('/api/v1/brands/99999/models')
  t.is(status, 404)
  t.like(body, { error: 'Not Found' })
})

test('Create brand', async t => {
  const { status, body } = await request
    .post('/api/v1/brands')
    .send({ name: 'Toyota' })

  t.is(status, 201)
  t.like(body, { name: 'Toyota' })
})

test('Create brand with error brand name is exist', async t => {
  const { status, body } = await request
    .post('/api/v1/brands')
    .send({ name: 'Toyota' })

  t.is(status, 409)
  t.like(body, { error: 'Conflict', message: 'name brand exist' })
})
