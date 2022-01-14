const db = require('../../database/models');

const createCorrectArray = require('../../utils/createCorrectArray');

class SalesController {
  static async createSale(req, res) {
    const { userId, sellerId, products, deliveryNumber, deliveryAddress, totalPrice } = req.body;
    let currentIdSale;

    try {
      const saleResult = await db.sales.create({
        userId,
        sellerId,
        deliveryAddress,
        deliveryNumber,
        totalPrice: parseFloat(totalPrice.replace(/,/, '.')),
      });

      const { id } = saleResult;
      currentIdSale = id;
      
      const formatedArray = await createCorrectArray(products, id);
      await db.salesProducts.bulkCreate(formatedArray);

      return res.status(201).json({ success: { message: 'Venda realizada', id: currentIdSale } });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar venda' });
    }
  }
}

module.exports = SalesController;