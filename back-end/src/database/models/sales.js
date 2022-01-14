'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
    },
  }, {
    timestamps: false,
    underscored: true,
  });
  
  Sales.associate = function(models) {
    Sales.belongsTo(models.users, {
      foreignKey: 'user_id',
    });

    Sales.belongsTo(models.users, {
      foreignKey: 'seller_id',
    });
  };

  return Sales;
};