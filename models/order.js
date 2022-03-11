'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idDestino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numPerson: {
      type: DataTypes.STRING,
      allowNull: false
    },
    costNeto: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    iva: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    pvp: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    day: {
      type: DataTypes.DATE,
      allowNull: false
    },

    
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};