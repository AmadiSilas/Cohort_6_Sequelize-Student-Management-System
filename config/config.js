require('dotenv').config()
const DB = process.env.SQL_DATABASE;
const host = process.env.SQL_HOST;
const username = process.env.SQL_USERNMAE;
const password = process.env.SQL_PASSWORD;
const dialect = process.env.SQL_DIALECT;

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "school_management_system",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": username,
    "password": password,
    "database": DB,
    "host": host,
    "dialect": dialect
  }
}
