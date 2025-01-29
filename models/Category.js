// models/Category.js
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    }, {
      tableName: 'categories',
    });
  
    Category.associate = (models) => {
      // Здесь можно добавить ассоциации, если необходимо
    };
  
    return Category;
  };