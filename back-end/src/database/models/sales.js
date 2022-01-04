'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
    sale_date: DataTypes.DATE,
  }, {
    createdAt: 'sale_date',
    updatedAt: false,
  });
  
  Sales.associate = function(models) {
    Sales.belongsTo(models.Users, {
      foreignKey: 'user_id',
    });

    Sales.belongsTo(models.Users, {
      foreignKey: 'seller_id',
    });
  };

  return Sales;
};