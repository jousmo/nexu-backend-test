const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

module.exports = {
  async up (queryInterface) {
    const date = dayjs('2022-07-27').utc().format()

    await queryInterface.bulkInsert('brands', [
      { id: 1, name: 'Acura', average_price: 375684.5, createdAt: date, updatedAt: date },
      { id: 2, name: 'Audi', average_price: 3818225, createdAt: date, updatedAt: date },
      { id: 3, name: 'Bentley', average_price: 395753, createdAt: date, updatedAt: date },
      { id: 4, name: 'BMW', average_price: 239050, createdAt: date, updatedAt: date },
      { id: 5, name: 'Buick', average_price: 239050, createdAt: date, updatedAt: date }
    ], {})
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('brands', null, {})
  }
}
