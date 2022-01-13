'use strict';

module.exports = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('salesProducts', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  sales_products.removeAttribute('id');

  sales_products.associate = function(models) {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: 'salesProducts',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: 'salesProducts',
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return sales_products;
};