'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Appointments', [
      { patient_id: 3, professional_id: 8, treatment_id: 15, appointment_on: '2023-03-05', start_at: '09:00:00', end_at: '09:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 7, professional_id: 6, treatment_id: 18, appointment_on: '2023-03-06', start_at: '09:00:00', end_at: '09:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 5, professional_id: 3, treatment_id: 19, appointment_on: '2023-03-06', start_at: '10:00:00', end_at: '10:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 6, professional_id: 3, treatment_id: 15, appointment_on: '2023-03-10', start_at: '15:00:00', end_at: '15:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 4, professional_id: 8, treatment_id: 15, appointment_on: '2023-03-11', start_at: '18:30:00', end_at: '19:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 8, professional_id: 6, treatment_id: 17, appointment_on: '2023-03-05', start_at: '10:00:00', end_at: '10:45:00', createdAt: new Date(), updatedAt: new Date() },
      { patient_id: 3, professional_id: 6, treatment_id: 14, appointment_on: '2023-03-10', start_at: '09:00:00', end_at: '09:45:00', createdAt: new Date(), updatedAt: new Date() }
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
