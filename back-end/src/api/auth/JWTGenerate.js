require('dotenv').config();
const jwt = require('jsonwebtoken');
const resultReadFile = require('../../helper/ReadFile');

module.exports = (login) => {
  try {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  const token = jwt.sign(login, resultReadFile, jwtConfig);
  return token;
  } catch (error) {
    return error.message;
  }
};
