'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class article extends Model {
  
    static associate(models) {
     
    }
  }

  // generate the model  modelo, types
  article.init({
      name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeCook: {
      type: DataTypes.INTEGER,
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
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasGluten: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasCrustaceos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasEgg: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasFish: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasSoja: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasMilk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasFructose: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasMustard: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasApio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasMolusco: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasAltramuces: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasSesamo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasSulfito: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasCacahuate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
    
  }, {
    sequelize,
    modelName: 'article',
  });

  return article;

};