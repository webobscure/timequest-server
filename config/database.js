const Sequelize = require("sequelize");
require("dotenv").config();

// Создание строки подключения с использованием переменной окружения DATABASE_URL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Убираем ошибку при проверке сертификатов
        }
    }
});

module.exports = sequelize;