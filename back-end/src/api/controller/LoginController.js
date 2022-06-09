const md5 = require('md5');

const db = require('../../database/models');
const JWTgenerate = require('../auth/JWTGenerate');

class LoginController {
  static async login(req, res) {
    const { email: loginEmail, password: loginPassword } = req.body;
    try {
      const md5Password = md5(loginPassword);
      const user = await db.users.findOne({
        where: { email: loginEmail, password: md5Password } });

      const { id, email, name, role } = user;
      const token = JWTgenerate({ id, email, name, role });
      return res.status(200).json({
        id, name, email, role, token,
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = LoginController;
