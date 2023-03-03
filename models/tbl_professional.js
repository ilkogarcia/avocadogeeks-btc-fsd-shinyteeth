/* eslint-disable camelcase */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_Professional.belongsTo(models.tbl_User)
      tbl_Professional.belongsTo(models.tbl_DentalSpecialties)
      tbl_Professional.hasMany(models.tbl_Schedule, {
        foreignKey: 'id'
      })
      tbl_Professional.hasMany(models.tbl_Appointment, {
        foreignKey: 'id'
      })
    }
  }

  tbl_Professional.init({
    specialties_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_Professional'
  })
  return tbl_Professional
}
