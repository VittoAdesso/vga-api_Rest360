'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderArticleTwo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderArticleTwo.init({
    
    // idOrder: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // idArticle: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // costNeto: {
    //   type: DataTypes.DECIMAL(6,2),
    //   allowNull: false
    // },
    // iva: {
    //   type: DataTypes.DECIMAL(6,2),
    //   allowNull: false
    // },
    // pvp: {
    //   type: DataTypes.DECIMAL(6,2),
    //   allowNull: false
    // },
    // cookTime: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // status: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false
    // },
          
  }, {
    sequelize,
    modelName: 'orderArticleTwo',
  });
  return orderArticleTwo;
};