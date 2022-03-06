'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class bill extends Model {
  
    static associate(models) {
     
    }
  }
  bill.init({
    
    idTicket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idTable: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeCook: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    iva: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pvp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    
    
  }, {
    sequelize,
    modelName: 'bill',
  });

  return bill;

};