// models/Section.js
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Ассоциация с Article (один раздел может иметь много статей)
  Section.associate = models => {
    Section.hasMany(models.Article, { foreignKey: 'sectionId' });
  };

  return Section;
};