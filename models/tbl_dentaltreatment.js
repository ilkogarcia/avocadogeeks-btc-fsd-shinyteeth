/* eslint-disable camelcase */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_DentalTreatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_DentalTreatment.belongsTo(models.tbl_DentalSpecialties)
      tbl_DentalTreatment.hasMany(models.tbl_Appointment, {
        foreignKey: 'id'
      })
    }
  }
  tbl_DentalTreatment.init({
    specialties_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    standard_duration: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'tbl_DentalTreatment'
  })
  return tbl_DentalTreatment
}
