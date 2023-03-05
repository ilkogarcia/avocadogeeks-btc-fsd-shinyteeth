/* eslint-disable camelcase */
'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tbl_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      tbl_Role.hasMany(models.tbl_User, {
        foreignKey: 'id'
      })
    }
  }

  tbl_Role.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_Role'
  })
  return tbl_Role
}
