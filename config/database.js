const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize('users', '', '', {
    host: '127.0.0.1',  // Локальный адрес
    port: 5432,         // Стандартный порт PostgreSQL
    dialect: 'postgres' // Указание диалекта
});

module.exports = sequelize;