const db = require("../../database/models");

class SalesController {
  static async createSale(req, res) {
    const { userId, sellerId, products, deliveryNumber, deliveryAddress, totalPrice } = req.body;

    try {
      const createdSale =  await db.sequelize.transaction(async (t) => {
        await db.sales.create(
          {
            user_id: userId,
            seller_id: sellerId,
            delivery_address: deliveryAddress,
            delivery_number: deliveryNumber,
            total_price: parseFloat(totalPrice),
          },
          { transaction: t }
        );
        
        products.forEach(async ({ productQnt }) => {
          await db.salesProducts.create({quantity: productQnt}, { transaction: t });
        });
      });

      return res.status(201).json({ success: {
        message: "Venda realizada com sucesso",
        id: createdSale.id,
      } });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar venda" });
    }
  }
}

module.exports = SalesController;