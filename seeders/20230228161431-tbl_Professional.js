'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Professionals', [
      { specialties_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 12, createdAt: new Date(), updatedAt: new Date() }
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
