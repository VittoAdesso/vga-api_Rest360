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
  
    // i dont have to define any fields, because is the middle table to connect menu & articles 
  }, {
    sequelize,
    modelName: 'menuArticle',
  });
  return menuArticle;
};