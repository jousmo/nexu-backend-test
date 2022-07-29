const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

module.exports = {
  async up (queryInterface) {
    const date = dayjs('2022-07-27').utc().format()

    await queryInterface.bulkInsert('models', [
      { name: 'ILX', average_price: 303176, brandId: 1, createdAt: date, updatedAt: date },
      { name: 'MDX', average_price: 448193, brandId: 1, createdAt: date, updatedAt: date },
      { name: 'NSX', average_price: 3818225, brandId: 2, createdAt: date, updatedAt: date },
      { name: 'RDX', average_price: 395753, brandId: 3, createdAt: date, updatedAt: date },
      { name: 'RL', average_price: 239050, brandId: 4, createdAt: date, updatedAt: date },
      { name: 'OS', average_price: 239050, brandId: 5, createdAt: date, updatedAt: date }
    ], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('models', null, {})
  }
}
