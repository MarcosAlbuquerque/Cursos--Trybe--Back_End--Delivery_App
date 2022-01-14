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

  static async getSaleDetailsById(req, res) {
    const { id } = req.params;
    try {
      const sale = await db.sales.findOne({
        where: { id },
        include: [
          {
            model: db.users,
            as: 'seller',
            attributes: ['name'],
          },
          {
            model: db.products,
            as: 'products',
            attributes: ['name', 'price', 'url_image' ],
          },
        ],
      });

      if(!sale) throw new Error();

      return res.status(200).json({ success: { message: 'Venda encontrada', sale } });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao buscar venda' });
    }
  }
}

module.exports = SalesController;