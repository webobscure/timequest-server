module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verifiedEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activationLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subscriptionDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      points: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dayStreak: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    }, {
      tableName: 'users',
    });
  
    // Ассоциации
    User.associate = (models) => {
      User.hasMany(models.Token, { 
        foreignKey: 'userId', 
        as: 'tokens',
      });
    };
  
    return User;
  };