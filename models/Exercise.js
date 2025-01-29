const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Подключение к БД

const Exercise = sequelize.define('Exercise', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverImage: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  openImage: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  audioUrl: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  
  category: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
}, {
  tableName: 'users' 
});

module.exports = Exercise;