const db = require('../../database/models');

class SellerController {
  static async getSalesBySeller(req, res) {
    const { id } = req.headers;

    try {
      const sales = await db.sales.findAll({
        where: { sellerId: id },
        // include: [
        //   { model: db.users, as: 'seller', attributes: ['name'] },
        //   { model: db.products, as: 'products', attributes: ['name', 'price', 'url_image'] },
        // ],
      });

      if (!sales) throw new Error();

      return res.status(200).json({ success: { message: 'Vendas encontradas', sales } });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao buscar vendas' });
    }
  }
}

module.exports = SellerController;
