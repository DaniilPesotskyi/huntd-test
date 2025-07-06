'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'recruiter_profiles',
        'city',
        {
          type: Sequelize.STRING(255),
          allowNull: true,
          defaultValue: null,
        },
      )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('recruiter_profiles', 'city');
  }
};
