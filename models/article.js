'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class article extends Model {
  
    static associate(models) {
     
    }
  }
  article.init({
    
    idArticle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
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
      type: DataTypes.DECIMAL,
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
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    crustaceos: {
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
    altramuces: {
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
    },
    cacahuate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
    
    
  }, {
    sequelize,
    modelName: 'article',
  });

  return article;

};