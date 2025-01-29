const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Token = sequelize.define('tokens', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        using: 'user::integer'
    },
    refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false
    },
   
});

module.exports = Token;