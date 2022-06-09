const md5 = require('md5');

const db = require('../../database/models');

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  const findedUser = await db.users.findOne({ where: { email } });

  const md5Password = md5(password);

    if (!findedUser || email !== findedUser.email || md5Password !== findedUser.password) {
      return res.status(404).json({ message: 'Not found' });
  }
  next();
};

module.exports = {
  loginValidation,
};
