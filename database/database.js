const Sequelize = require("sequelize");

const connection = new Sequelize('jokenpo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;