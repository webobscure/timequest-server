module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tokens', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('tokens', 'userId');
  },
};