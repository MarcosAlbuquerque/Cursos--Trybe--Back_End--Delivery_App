'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente',
    },
  }, {
    timestamp: false,
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