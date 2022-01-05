const db = require('../../database/models');
const JWTgenerate = require('../auth/JWTGenerate');

class UserController {
  static async getAllUsers(_req, res) {
    try {
      const allUsers = await db.users.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    const { email } = newUser;
    try {
      await db.users.create(newUser);
      const getNewUser = await db.users.findOne({
        where: { email },
      });
      const { id, displayName, image } = getNewUser;
      const token = JWTgenerate({ id, displayName, email, image });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { userId } = req.params;
    const updatedUser = req.body;
    try {
      await db.users.update(updatedUser, { where: { id: Number(userId) } } );
      const getUpdatedUser = await db.users.findOne({
        where: { userId },
      });
      const { id, displayName, image } = getUpdatedUser;
      const token = JWTgenerate({ id, displayName, email, image });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

}

module.exports = UserController;