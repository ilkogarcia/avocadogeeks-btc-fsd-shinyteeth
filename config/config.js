require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'db_shinyteeth',
    host: '127.0.0.1',
    port: 3309,
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'db_shinyteeth',
    host: '127.0.0.1',
    port: 3309,
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: process.env.MYSQLDIALECT
  }
}
