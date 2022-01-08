require('dotenv').config();
const jwt = require('jsonwebtoken');

// const { readFile } = require('fs');
// Utilizar o modulo readFile jwt.evaluation.key

module.exports = (login) => {
  try {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };  
  const token = jwt.sign(login, 'secret_key', jwtConfig);
  return token;
  } catch (error) {
    return error.message;
  }
};
