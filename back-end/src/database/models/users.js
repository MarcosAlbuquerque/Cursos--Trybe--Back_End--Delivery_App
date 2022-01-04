'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 'The password must be at least 6 characters long.'],
      },
    },
    role: {
      type: DataTypes.STRING,
    }
  }, { timestamps: false });
  
  Users.associate = function(models) {
    Users.hasMany(models.Sales, {
      foreignKey: 'user_id',
    });
  };
  return Users;
};
