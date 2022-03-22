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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'orderArticle',
  });
  return orderArticle;
};