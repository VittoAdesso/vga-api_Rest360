'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class bookingGift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookingGift.init({

    idGift: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeGift: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numPersonas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dateBuy: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateConsume: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  
    
  }, {
    sequelize,
    modelName: 'bookingGift',
  });

  return bookingGift;

};