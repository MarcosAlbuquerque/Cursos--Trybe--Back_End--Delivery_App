require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../../database/models');
const resultReadFile = require('../../helper/ReadFile');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decodedToken = jwt.verify(token, resultReadFile);
    const checkTokenAlreadyExists = await db.users.findOne({
      where: { email: decodedToken.email },
    });
    
    if (!checkTokenAlreadyExists) {
      return res.status(401).json({ message: 'Token not found' });
    }
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;
