'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Professionals', [
      { specialties_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 5, createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
