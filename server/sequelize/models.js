const Sequelize = require('sequelize')
const sequelize = require('./sequelize.js')

let User = sequelize.define('user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = {
    User
}