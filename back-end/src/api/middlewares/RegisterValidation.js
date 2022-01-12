const db = require('../../database/models');

const registerValidation = async (req, res, next) => {
  const { email } = req.body;
  const checkEmailAlreadyExists = await db
    .users.findOne({ where: { email } });
  console.log(checkEmailAlreadyExists);
  if (checkEmailAlreadyExists) {
    return res.status(409).json({ message: 'Email already exists' });
  }
  next();
};

module.exports = registerValidation;
