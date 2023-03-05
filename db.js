const config = require('./config/config.json')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || config.production.database,
  process.env.MYSQL_USER || config.production.username,
  process.env.MYSQL_PASSWORD || config.production.password,
  {
    host: process.env.MYSQL_HOST || config.production.host,
    port: process.env.MYSQL_PORT || config.production.port || '6917',
    dialect: 'mysql',
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
