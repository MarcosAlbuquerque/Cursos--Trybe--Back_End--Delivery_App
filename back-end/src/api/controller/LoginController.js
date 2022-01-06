const db = require('../../database/models');
const JWTgenerate = require('../auth/JWTGenerate');

class LoginController {
  static async login(req, res) {
    const { email: loginEmail, password: loginPassword } = req.body;
    try {
      // tera de ser feita uma conversao de string para md5
      const user = await db.users.findOne({
        where: { email: loginEmail, password: loginPassword } });

      const { id, email, name, role } = user;
      const token = JWTgenerate({ id, email, name, role });
      return res.status(200).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = LoginController;
