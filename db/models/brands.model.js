const { DataTypes } = require('sequelize')

const USER_TABLE = 'brands'

const BrandsSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  average_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  }
}

module.exports = sequelize => sequelize.define(USER_TABLE, BrandsSchema, {
  timestamps: true
})
