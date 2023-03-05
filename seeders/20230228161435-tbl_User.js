'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_Users', [
      { role_id: 1, patient_id: null, professional_id: null, first_name: 'Carla', middle_name: 'Trujillo', last_name: 'Rodriguez', mobile_phone: '687117201', email: 'carla_trujillo92@gmail.com', password_hash: 'YWmALqTw', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 2, patient_id: 3, professional_id: null, first_name: 'Gustavo', middle_name: 'Espinosa', last_name: 'Marquez', mobile_phone: '731540643', email: 'gustavo_espinoza50@yahoo.com', password_hash: 'J0NqMVJU', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 3, patient_id: null, professional_id: 22, first_name: 'María', middle_name: 'Dolores', last_name: 'Fuertes', mobile_phone: '618853843', email: 'mariadolores@gmail.com', password_hash: 'YWmALqTw', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 3, patient_id: null, professional_id: 25, first_name: 'Enrique', middle_name: 'Almusafez', last_name: 'Peperoni', mobile_phone: '654684925', email: 'enrique4@yahoo.com', password_hash: 'le02T5vI', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 2, patient_id: 7, professional_id: null, first_name: 'Francisca', middle_name: 'Repollo', last_name: 'Gonzalez', mobile_phone: '794057925', email: 'francisca91@yahoo.com', password_hash: 'wmk3ZJue', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 4, patient_id: null, professional_id: null, first_name: 'Emilio', middle_name: 'Ocampo', last_name: 'Ruiz', mobile_phone: '738889714', email: 'emilio.ocampo24@yahoo.com', password_hash: 'BP6w5aFA', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 3, patient_id: null, professional_id: 26, first_name: 'Leonor', middle_name: 'Segovia', last_name: '', mobile_phone: '749267429', email: 'leonor_segovia30@gmail.com', password_hash: '1I5ZVt8c', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 2, patient_id: 5, professional_id: null, first_name: 'Federico', middle_name: 'Lorca', last_name: '', mobile_phone: '617160423', email: 'federico41@yahoo.com', password_hash: 'uIwNGLgX', createdAt: new Date(), updatedAt: new Date() },
      { role_id: 2, patient_id: 2, professional_id: null, first_name: 'Jose', middle_name: 'Luis', last_name: 'Rodriguez', mobile_phone: '788840486', email: 'joseluis66@yahoo.com', password_hash: 'FXlxyF30', createdAt: new Date(), updatedAt: new Date() }
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
