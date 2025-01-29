const Sequelize = require("sequelize");
require("dotenv").config({ path: "../.env" });
console.log("DATABASE_PUBLIC_URL: ", process.env.DATABASE_PUBLIC_URL);
const sequelize = new Sequelize(process.env.DATABASE_PUBLIC_URL, {
    dialect: 'postgres', // Указание диалекта
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;