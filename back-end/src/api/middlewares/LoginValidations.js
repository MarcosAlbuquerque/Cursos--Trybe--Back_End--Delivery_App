const db = require('../../database/models');

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  const findedUser = await db.users.findOne({ where: { email } });

    if (!findedUser || email !== findedUser.email || password !== findedUser.password) {
      return res.status(404).json({ message: 'Not found' });
  }
  next();
};

module.exports = {
  loginValidation,
};
