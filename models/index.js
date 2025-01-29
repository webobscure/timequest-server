const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/your-database-name', {
  dialect: 'postgres',
});

const models = {};

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