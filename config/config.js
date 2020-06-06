require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "recipedia_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
  }
}