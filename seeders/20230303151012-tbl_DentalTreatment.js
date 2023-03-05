'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_DentalTreatments', [
      { specialties_id: 3, name: 'Cirugía Oral', description: 'Extracciones dentarias y cirugía de la boca.', standard_duration: '00:45:00', createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 3, name: 'Periodoncia', description: 'Tratamiento de la patología de las encías y tejidos de soporte dentario.', standard_duration: '01:00:00', createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 4, name: 'Ortodoncia', description: 'Diagnóstico, prevención y el tratamiento de las irregularidades dentales y faciales.', standard_duration: '00:30:00', createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 6, name: 'Cirugía Oral', description: 'Extracciones dentarias y cirugía de la boca.', standard_duration: '01:30:00', createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 6, name: 'Endodoncia', description: 'Desinfección y limpieza químico-mecánica, y obturación del sistema de conductos radiculares.', standard_duration: '00:45:00', createdAt: new Date(), updatedAt: new Date() },
      { specialties_id: 2, name: 'Obturación dental', description: 'Restauración de algún diente que ha sido dañado por caries', standard_duration: '00:45:00', createdAt: new Date(), updatedAt: new Date() }
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
