'use strict'
/* eslint-disable camelcase */

const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_Schedule.belongsTo(models.tbl_Professional)
      tbl_Schedule.belongsTo(models.tbl_Appointment)
    }
  }
  tbl_Schedule.init({
    profesional_id: DataTypes.INTEGER,
    appointment_id: DataTypes.INTEGER,
    workday: DataTypes.DATE,
    start_time_slot: DataTypes.TIME,
    end_time_slot: DataTypes.TIME,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tbl_Schedule'
  })
  return tbl_Schedule
}
