const Sequelize = require('sequelize')

let sequelize = new Sequelize('blog', 'root', 'li7031583', {host : '127.0.0.1', port : '3306', dialect : 'mysql'})


module.exports = sequelize