const db = require('../models');

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  
  const findedUser = await db.users.findOne({ where: { email } });
  
    if (!findedUser || email !== findedUser.email || password !== findedUser.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  loginValidation,
};
