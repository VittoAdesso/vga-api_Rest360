'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderUser.init({
    
    idOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // situacionPedido: {
    //   type: DataTypes.VARCHAR(100),
    //   allowNull: true
    // },
    
    
  }, {
    sequelize,
    modelName: 'orderUser',
  });
  return orderUser;
};