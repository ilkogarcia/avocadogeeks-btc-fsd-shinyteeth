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
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT
  }
}
