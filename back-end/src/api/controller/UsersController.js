const md5 = require('md5');
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

  static async getAllSellers(_req, res) {
    try {
      const allSellers = await db.users.findAll({ where: { role: 'seller' } });
      return res.status(200).json(allSellers);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = { ...req.body, password: md5(req.body.password) };
    try {
      const created = await db.users.create(newUser);
      const { id, name, email, role } = created;
      const token = JWTgenerate({ id, name, email, role });
      return res.status(201).json({
        id, name, email, role, token });
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }

  static async updateUser(req, res) {
    const { userId } = req.params;
    const updatedUser = req.body;
    try {
      await db.users.update(updatedUser, { where: { id: Number(userId) } });
      const getUpdatedUser = await db.users.findOne({
        where: { userId },
      });
      const { id, displayName, image } = getUpdatedUser;
      const token = JWTgenerate({ id, displayName, /* email (email is not defined) */ image });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = UserController;