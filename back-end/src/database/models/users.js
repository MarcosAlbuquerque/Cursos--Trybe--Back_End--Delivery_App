'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
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
