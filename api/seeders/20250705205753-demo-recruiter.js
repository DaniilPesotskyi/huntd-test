"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: "Dnipro" },
      { company_name: "Recruiter Company" },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkUpdate(
      "recruiter_profiles",
      { city: null },
      { company_name: "Recruiter Company" },
      {}
    );
  }
};
