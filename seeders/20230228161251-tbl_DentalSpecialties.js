'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbl_DentalSpecialties', [
      {name: "Odontología general", description: "La odontología general proporciona los conocimientos fundamentales para aplicar tratamientos básicos con los que mejorar la salud bucal. También tiene una parte preventiva, pues proporciona recomendaciones sobre higiene y salud bucodental que ayudan a evitar la aparición de otras enfermedades más graves que ya necesitaría atender un odontólogo más especializado.", createdAt: new Date(), updatedAt: new Date()},
      {name: "Endodoncia", description: "Especializarte en la rama de la endodoncia te capacita para ser endodoncista y tu especialidad será la pulpa dental (el nervio del diente) en todos sus aspectos, abarcando el diagnóstico, prevención y tratamiento de la misma.", createdAt: new Date(), updatedAt: new Date()},
      {name: "Patología maxilofacial y oral", description: "La patología maxilofacial y oral es la rama que realiza el diagnóstico y estudio de las enfermedades de la cavidad oral, mandíbulas (maxilares) y estructuras relacionadas. Tanto en sus causas como en su manera de afectar al paciente.", createdAt: new Date(), updatedAt: new Date()},
      {name: "Ortodoncia", description: "La especialidad de ortodoncia abarca no sólo la corrección de las mandíbulas y los dientes mal posicionados alineándolos correctamente para modificar la mordida y que haya una correcta oclusión. También se ocupa del diagnóstico y, muy importante, de la prevención.", createdAt: new Date(), updatedAt: new Date()},
      {name: "Odontopediatría", description: "La odontopediatría o también llamada Odontología pediátrica, se especializa en la salud bucal y el tratamiento de enfermedades dentales no solo en niños, también en adolescentes y recién nacidos.", createdAt: new Date(), updatedAt: new Date()},
      {name: "Periodoncia", description: "La periodoncia es una especialidad odontológica que se encarga del cuidado y estudio de los tejidos y estructuras de apoyo de los dientes.", createdAt: new Date(), updatedAt: new Date()}
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
