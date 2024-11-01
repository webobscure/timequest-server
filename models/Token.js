const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const User = sequelize.define('tokens', {
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
});

module.exports = User;