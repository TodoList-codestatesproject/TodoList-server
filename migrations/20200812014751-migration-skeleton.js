'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('todoLists', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'userid_foreign_key',
      references: {
        table: 'users',
        field: 'userId'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('todoLists', 'userid_foreign_key');
  }
};
