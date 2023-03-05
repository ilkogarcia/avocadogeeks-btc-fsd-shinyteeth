'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Schedules', [
      { profesional_id: 24, appointment_id: 8, workday: '2023-03-05', start_time_slot: '09:00:00', end_time_slot: '09:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 22, appointment_id: 9, workday: '2023-03-06', start_time_slot: '09:00:00', end_time_slot: '09:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 28, appointment_id: 14, workday: '2023-03-06', start_time_slot: '10:00:00', end_time_slot: '10:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 26, appointment_id: 12, workday: '2023-03-10', start_time_slot: '15:00:00', end_time_slot: '15:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 22, appointment_id: 13, workday: '2023-03-11', start_time_slot: '18:30:00', end_time_slot: '19:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 24, appointment_id: 9, workday: '2023-03-05', start_time_slot: '10:00:00', end_time_slot: '10:45:00', available: false, createdAt: new Date(), updatedAt: new Date() },
      { profesional_id: 27, appointment_id: 10, workday: '2023-03-10', start_time_slot: '09:00:00', end_time_slot: '09:45:00', available: false, createdAt: new Date(), updatedAt: new Date() }
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
