const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); 

module.exports = () => {
  const Subsection = sequelize.define('Subsection', {
    sectionId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Subsection.associate = function(models) {
    Subsection.belongsTo(models.Section, { foreignKey: 'sectionId' });
  };

  return Subsection;
};