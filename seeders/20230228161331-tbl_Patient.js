'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Patients', [
      { ehr_number: 'R5zsXYrK4bhhx8SfxB4S', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'bRw3XXmdTubbOq5rVQjQ', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'VClKTBchVaiTqzGOEq0M', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'fAkyyf4kcFFiswP6KgVt', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'Wh0PksvQMjcZvNMdpbh7', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'VZVsn9jB8We78gXK7yVQ', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'MaQQZy3MPpXnWa1hBWBG', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'ui59IsVBt8RScgMYKOrC', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: 'FxvGXBlJLmkfEqJOhJUj', createdAt: new Date(), updatedAt: new Date() },
      { ehr_number: '6hCy1w8tQSs6MOPu17Dl', createdAt: new Date(), updatedAt: new Date() }
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
