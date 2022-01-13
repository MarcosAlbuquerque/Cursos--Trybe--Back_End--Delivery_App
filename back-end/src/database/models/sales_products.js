'use strict';

module.exports = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('sales_products', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    underscored: true
  });

  sales_products.removeAttribute('id');

  sales_products.associate = function(models) {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: 'sales_products',
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: 'sales_products',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return sales_products;
};