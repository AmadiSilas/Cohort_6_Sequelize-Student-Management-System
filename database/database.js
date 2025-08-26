const {Sequelize} = require('sequelize')
require('dotenv').config()

const DB = process.env.SQL_DATABASE;
const host = process.env.SQL_HOST;
const username = process.env.SQL_USERNMAE;
const password = process.env.SQL_PASSWORD;
const dialect= process.env.SQL_DIALECT;

//const sequelize = new Sequelize('school_management_system', 'root', 'ChelseaFc', {
//  host: 'localhost',
//  dialect: 'mysql' 

const sequelize = new Sequelize(DB, username, password, {
host: host, 
dialect : dialect
});

module.exports = sequelize;