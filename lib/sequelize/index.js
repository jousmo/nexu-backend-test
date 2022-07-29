const { Sequelize } = require('sequelize')
const { development, test } = require('../../config/sequelize')
const config = process.env.NODE_ENV === 'test' ? test : development

const { database, username, password, logging, seederStorage, ...moreConfig } = config

module.exports = new Sequelize(database, username, password, moreConfig)
