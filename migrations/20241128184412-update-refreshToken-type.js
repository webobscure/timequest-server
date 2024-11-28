'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('tokens', 'refreshToken', {
          type: Sequelize.TEXT,
          allowNull: false,
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.changeColumn('tokens', 'refreshToken', {
          type: Sequelize.STRING(255),
          allowNull: false,
      });
  }
};
