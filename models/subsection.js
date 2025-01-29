// models/Subsection.js
module.exports = (sequelize, DataTypes) => {
  const Subsection = sequelize.define('Subsection', {
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: false, // sectionId должен быть обязательным
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // title должен быть обязательным
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true, // content может быть пустым
    }
  });

  // Ассоциации
  Subsection.associate = models => {
    // Связь с моделью Section (много подразделов могут быть у одного раздела)
    Subsection.belongsTo(models.Section, {
      foreignKey: 'sectionId', 
      as: 'section', // Опционально можно задать alias
    });
  };

  return Subsection;
};