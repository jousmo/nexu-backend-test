const sequelize = require('../../lib/sequelize')
const db = { sequelize }

const Brands = require('./brands.model')
const Models = require('./models.model')

db.Brands = Brands(sequelize)
db.Models = Models(sequelize)

db.Brands.hasOne(db.Models, { foreignKey: 'brandId' })
db.Models.belongsTo(db.Brands, { foreignKey: 'brandId' })

module.exports = db
