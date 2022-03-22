'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
  
    static associate(models) {

      // disable code to associations for the moment

      // // have many orders 
      // models.contact.hasMany(models.order, {
      //   // i find with PK
      //   foreignKey: "userId",
      //   // name of association == as IS COMPULSORY , plural
      //   as: "orders",
      // })
    }
  }
  
  contact.init({

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anyComment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasDiscount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isContacted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'contact',
  });
    return contact;
};