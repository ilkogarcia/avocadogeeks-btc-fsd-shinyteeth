/* eslint-disable camelcase */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_DentalSpecialties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_DentalSpecialties.hasMany(models.tbl_Professional, {
        foreignKey: 'id'
      })
      tbl_DentalSpecialties.hasMany(models.tbl_DentalTreatment, {
        foreignKey: 'id'
      })
    }
  }

  tbl_DentalSpecialties.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tbl_DentalSpecialties'
  })
  return tbl_DentalSpecialties
}
