'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menuArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menuArticle.init({
    idMenu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idArticle: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    
  }, {
    sequelize,
    modelName: 'menuArticle',
  });
  return menuArticle;
};