const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize('postgresql://postgres:tFmgnORNVuDnhlxHsvdPwFjFLYBGqqdR@junction.proxy.rlwy.net:40118/railway', {
    dialect: 'postgres', // Указание диалекта
    protocol: 'posgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;