const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const User = sequelize.define('tokens', {
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        using: 'user::integer'
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
});

module.exports = User;