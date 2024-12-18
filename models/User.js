const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const User = sequelize.define('User', {
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verifiedEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activationLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subscriptionDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    points: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    dayStreak: {
        type: DataTypes.STRING,
        defaultValue: 0
    }
}, {
    tableName: 'users' // Название таблицы явно указывается как 'users'
});

module.exports = User;