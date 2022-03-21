'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: false
    },
    numPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isAllergic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    disccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    confirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  
  }, {
    sequelize,
    modelName: 'booking',
  });

  return booking;

};