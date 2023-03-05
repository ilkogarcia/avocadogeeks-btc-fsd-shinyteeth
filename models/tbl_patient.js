'use strict'
/* eslint-disable camelcase */

const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // Associations with other entity models...
      tbl_Patient.hasOne(models.tbl_User, {
        foreignKey: 'id'
      })

      tbl_Patient.hasMany(models.tbl_Appointment, {
        foreignKey: 'id'
      })
    }
  }

  tbl_Patient.init({
    ehr_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_Patient'
  })
  return tbl_Patient
}
