'use strict';

const {
  Model
} = require('sequelize');

const {article} = require('../models/article')
const {menuArticle} = require('../models/menu_article')

module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.menu.belongsToMany(models.article, {
        through: models.menuArticle,
        foreignKey: "menuId",
        otherKey: "articleId",
        // name of association = AS IS COMPULSORY
        as: "articles",
        onDelete: "cascade"
      })
    }
  }
  menu.init({
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    
  }, {
    sequelize,
    modelName: 'menu',
    
  });
  return menu;
};