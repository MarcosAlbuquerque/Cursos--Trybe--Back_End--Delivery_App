const db = require('../../database/models');


class SalesController {
  static async createSale(req, res) {
    const { id } = req.user;
    try {
      const resuls = await db.sales.findAll( { where: { id } } );
      return res.status(200).json(resuls);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = SalesController;