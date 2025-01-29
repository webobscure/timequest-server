// models/Exercise.js
module.exports = (sequelize, DataTypes) => {
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
    categoryId: {  // Переименовываем атрибут
      type: DataTypes.INTEGER, 
      allowNull: true,
    },
  }, {
    tableName: 'exercises',
  });

  Exercise.associate = (models) => {
    Exercise.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Exercise;
};