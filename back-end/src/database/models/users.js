'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 32],
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
