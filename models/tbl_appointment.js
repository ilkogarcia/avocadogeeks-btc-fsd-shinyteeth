'use strict'
/* eslint-disable camelcase */

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // Associations with other entity models...
      tbl_Appointment.belongsTo(models.tbl_Patient, {
        foreignKey: 'id'
      })

      tbl_Appointment.belongsTo(models.tbl_Professional, {
        foreignKey: 'id'
      })

      tbl_Appointment.belongsTo(models.tbl_DentalTreatment, {
        foreignKey: 'id'
      })

      tbl_Appointment.hasMany(models.tbl_Schedule, {
        foreignKey: 'id'
      })
    }
  }
  tbl_Appointment.init({
    patient_id: DataTypes.INTEGER,
    professional_id: DataTypes.INTEGER,
    treatment_id: DataTypes.INTEGER,
    appointment_on: DataTypes.DATE,
    start_at: DataTypes.TIME,
    end_at: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'tbl_Appointment'
  })
  return tbl_Appointment
}
