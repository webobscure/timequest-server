const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Подключение к БД

const Exercise = sequelize.define('exercises', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverImage: {
    type: DataTypes.STRING, // Хранит URL или путь к файлу
    allowNull: true,
  },
  openImage: {
    type: DataTypes.STRING, // Изображение при открытии
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT, // Основной текст задания
    allowNull: false,
  },
  audioUrl: {
    type: DataTypes.STRING, // Ссылка на аудиофайл
    allowNull: true,
  },
  
  category: {
    type: DataTypes.STRING, // Например, listening, speaking
    allowNull: true,
  },
}, {
  timestamps: true, // createdAt и updatedAt
  tableName: 'users' 
});

module.exports = Exercise;