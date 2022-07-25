const brands = [
  { id: 1, name: 'Acura', average_price: 375684.5 },
  { id: 2, name: 'Audi', average_price: 3818225 },
  { id: 3, name: 'Bentley', average_price: 395753 },
  { id: 4, name: 'BMW', average_price: 239050 },
  { id: 5, name: 'Buick', average_price: 239050 }
]

const models = [
  { id: 1, name: 'ILX', average_price: 303176, brandId: 1 },
  { id: 2, name: 'MDX', average_price: 448193, brandId: 1 },
  { id: 3, name: 'NSX', average_price: 3818225, brandId: 2 },
  { id: 4, name: 'RDX', average_price: 395753, brandId: 3 },
  { id: 5, name: 'RL', average_price: 239050, brandId: 4 },
  { id: 6, name: 'OS', average_price: 239050, brandId: 5 }
]

module.exports = {
  brands,
  models
}
