module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    articleId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Section.associate = function(models) {
    Section.belongsTo(models.Article, { foreignKey: 'articleId' });
    Section.hasMany(models.Subsection, { foreignKey: 'sectionId' });
  };

  return Section;
};