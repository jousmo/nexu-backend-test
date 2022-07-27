const { Sequelize } = require('sequelize')
const { development } = require('../../config/sequelize')
const { database, username, password, ...moreConfig } = development

module.exports = new Sequelize(database, username, password, moreConfig)
