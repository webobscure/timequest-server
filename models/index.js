const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL , {
  dialect: 'postgres',
});

const UserModel = require('./User')(sequelize, DataTypes); // Вызов функции для инициализации модели
const tokenModel = require('./Token')(sequelize, DataTypes);

const models = {
  User: UserModel, // Экспортируем модель с инициализацией
  Token: tokenModel
};

// Загружаем все модели
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js') // Исключаем текущий файл
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model; // Добавляем модель в объект models
  });

// Инициализируем ассоциации
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, Sequelize, models };