require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (login) => {
  try {
  const jwtConfig = {
    algorithm: 'HS256',
  };  
  const token = jwt.sign(login, process.env.JWT_SECRET, jwtConfig);
  return { token };
  } catch (error) {
    return error.message;
  }
};
