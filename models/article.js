'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  article.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pvp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    iva: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    egg: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fish: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    soja: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    milk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fructose: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    mustard: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    apio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    molusco: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    altramuce: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sesamo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sulfito: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
    
    
  }, {
    sequelize,
    modelName: 'article',
  });

  return article;

};