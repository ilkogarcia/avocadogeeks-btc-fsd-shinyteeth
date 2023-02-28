/* eslint-disable camelcase */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_User.hasOne(models.tbl_Role, {
        foreignKey: 'id',
        allowNull: false
      })

      tbl_User.hasOne(models.tbl_Patient, {
        foreignKey: 'id'
      })

      tbl_User.hasOne(models.tbl_Professional, {
        foreignKey: 'id'
      })
    }
  }
  tbl_User.init({
    patient_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    professional_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    mobile_phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_User'
  })
  return tbl_User
}
