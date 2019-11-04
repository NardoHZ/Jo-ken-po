const Sequelize = require("sequelize");
const connection = require("./database");

const Ranking = connection.define('ranking', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pontuacao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Ranking.sync({force: false}).then(() => {});

module.exports = Ranking;