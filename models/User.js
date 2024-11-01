const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const User = sequelize.define('users', {
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
        allowNull: false,
        def
    },
    activationLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;