const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Подключение к БД

const Exercise = sequelize.define('exercise', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  coverImage: {
    type: DataTypes.STRING, // Хранит URL или путь к файлу
    allowNull: true,
  },
  openImage: {
    type: DataTypes.STRING, // Изображение при открытии
    allowNull: true,
  },
  text: {
    type: DataTypes.TEXT, // Основной текст задания
    allowNull: false,
  },
  audioUrl: {
    type: DataTypes.STRING, // Ссылка на аудиофайл
    allowNull: true,
  },
  difficultyLevel: {
    type: DataTypes.ENUM("easy", "medium", "hard"),
    allowNull: false,
    defaultValue: "medium",
  },
  category: {
    type: DataTypes.STRING, // Например, listening, speaking
    allowNull: true,
  },
}, {
  timestamps: true, // createdAt и updatedAt
});

module.exports = Exercise;