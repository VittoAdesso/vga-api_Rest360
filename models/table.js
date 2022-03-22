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

    idTable: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idVisual: {
      type: DataTypes.STRING,
      allowNull: true
    },

  }, {
    sequelize,
    modelName: 'table',
  });
  return table;
};