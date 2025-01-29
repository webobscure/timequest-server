const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); 

module.exports = () => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Article.associate = function(models) {
    Article.hasMany(models.Section, { foreignKey: 'articleId' });
  };

  return Article;
};