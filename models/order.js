'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // singular
      models.order.belongsTo(models.user, {
        foreignKey: "userId",
        // name of association == as IS COMPULSORY, singular
        as: "user",
      }),

      models.order.belongsToMany(models.article, {
        through: models.orderArticle,
        foreignKey: "orderId",
        otherKey: "articleId",
        // name of association = AS IS COMPULSORY IS PLURAL N N
        as: "articles",
        onDelete: "cascade"
      })
    }
  }
  order.init({
    
    peopleCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    costNeto: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    iva: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    pvp: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};