const db = require('../../database/models');

const UniqueUserValidation = async (req, res, next) => {
  const { email } = req.body;

  const findedUser = await db.users.findOne({ where: { email } });
  if (findedUser) {
    return res.status(409).json({ message: 'User already exists' });
  }
  next();
};

module.exports = UniqueUserValidation;
