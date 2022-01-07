'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      validation: {
        min: { args: [6] },
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'customer'
    }
  }, { timestamps: false });
  
  Users.associate = function(models) {
    Users.hasMany(models.sales, {
      foreignKey: 'user_id',
    });
  };
  return Users;
};
