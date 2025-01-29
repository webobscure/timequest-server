// models/Article.js
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // Ассоциация с Section (одна статья принадлежит одному разделу)
  Article.associate = models => {
    Article.belongsTo(models.Section, { foreignKey: 'sectionId' });
  };

  return Article;
};