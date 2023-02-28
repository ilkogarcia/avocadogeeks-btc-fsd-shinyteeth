'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Role', [
      {title: "Invitado", createdAt: new Date(), updatedAt: new Date()},
      {title: "Paciente", createdAt: new Date(), updatedAt: new Date()},
      {title: "Profesional", createdAt: new Date(), updatedAt: new Date()},
      {title: "Administrador", createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
