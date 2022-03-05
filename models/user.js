'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
  
    static associate(models) {
    
    }
  }
  
  user.init({

    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    phone: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    dateOfBirth: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    }
 
    
  }, {
    sequelize,
    modelName: 'user',
  });
  
  return user;
};