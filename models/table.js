'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  table.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table',
  });
  return table;
};