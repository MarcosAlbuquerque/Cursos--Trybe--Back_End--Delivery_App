const db = require('../../database/models');

class ProductsController {
  static async getAllProducts(_req, res) {
    try {
      const products = await db.products.findAll();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = ProductsController;
