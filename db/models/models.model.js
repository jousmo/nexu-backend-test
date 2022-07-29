const { DataTypes } = require('sequelize')

const USER_TABLE = 'models'

const ModelsSchema = {
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
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: 'id',
      model: 'brands'
    }
  }
}

module.exports = sequelize => sequelize.define(USER_TABLE, ModelsSchema, {
  timestamps: true
})
