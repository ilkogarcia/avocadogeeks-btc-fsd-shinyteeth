const config = require('./config/config.js')
const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE || config.development.database,
  process.env.MYSQLUSER || config.development.username,
  process.env.MYSQLPASSWORD || config.development.password,
  {
    host: process.env.MYSQLHOST || config.development.host,
    port: process.env.MYSQLPORT || config.development.port,
    dialect: process.env.MYSQLDIALECT || config.development.dialect,
    operatorAliases: false,
    pool: {
      max: 5, // maximum number of connection in pool
      min: 0, // minimum number of connection in pool
      acquire: 30000, // maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
    }
  }
)

module.exports = sequelize.authenticate()
  .then((db) => {
    console.log('MYSQL connected')
    return db
  })
