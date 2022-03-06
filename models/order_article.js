'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderArticle.init({
    
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idArticle: {
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
    time: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  
    
  }, {
    sequelize,
    modelName: 'orderArticle',
  });
  return orderArticle;
};