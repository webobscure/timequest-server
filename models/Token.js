module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('Token', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',  // Указываем таблицу, на которую ссылается внешний ключ
          key: 'id',
        },
      },
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      tableName: 'tokens',
    });
  
    Token.associate = (models) => {
      Token.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
  
    return Token;
  };