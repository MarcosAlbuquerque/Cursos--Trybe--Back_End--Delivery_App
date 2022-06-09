'use strict';

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      // Fonte: https://sequelize.org/v5/manual/data-types.html
      type: DataTypes.DECIMAL(4, 2),
      validate: { min: 0.01 },
    },
    url_image: {
      type: DataTypes.STRING,
      validate: { isUrl: true }
    },
  }, { timestamps: false });

  return Products;
};