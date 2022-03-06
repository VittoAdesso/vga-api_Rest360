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

    idReserva: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hour: {
      type: DataTypes.DATE(6),
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allergic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ofertas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    confirmacion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  
    
  }, {
    sequelize,
    modelName: 'booking',
  });

  return booking;

};