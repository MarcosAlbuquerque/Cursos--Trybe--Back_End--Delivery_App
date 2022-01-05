const db = require('../../database/models');
const JWTgenerate = require('../auth/JWTGenerate');

class LoginController {
  static async login(req, res) {
    const { email } = req.body;
    try {
      const user = await db.Users.findOne({
        where: { email },
      });
      const { id, displayName } = user;
      const token = JWTgenerate({ id, displayName, email });
      return res.status(200).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = LoginController;
