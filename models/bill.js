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
    idDestino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comensales: {
      type: DataTypes.STRING,
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
    pagado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    
    
  }, {
    sequelize,
    modelName: 'bill',
  });

  return bill;

};