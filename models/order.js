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
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    iva: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pvp: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  
    
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};